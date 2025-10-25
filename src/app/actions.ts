'use server';

import { trafficSignInformation, TrafficSignInformationOutput } from '@/ai/flows/traffic-sign-information';
import { generateQuiz, type GeneratedQuiz } from '@/ai/flows/quiz-generator';
import { generateTrafficSignQuestion, type TrafficSignQuestion } from '@/ai/flows/traffic-sign-practice-generator';
import mcqData from '@/lib/mcq-data.json';
import { trafficSigns } from '@/lib/data';
import connectDB from '@/lib/db';
import { User } from '@/models/User';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';


type ActionResult = {
  data?: TrafficSignInformationOutput;
  error?: string;
}

export async function getTrafficSignInfo(photoDataUri: string): Promise<ActionResult> {
  if (!photoDataUri) {
    return { error: 'Image data is missing.' };
  }

  try {
    const result = await trafficSignInformation({ photoDataUri });
    return { data: result };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to analyze the traffic sign. Please try again.' };
  }
}

type QuizActionResult = {
  data?: GeneratedQuiz;
  error?: string;
}

export async function getAIQuiz(): Promise<QuizActionResult> {
  try {
    const allQuestions = JSON.stringify(mcqData.questions);
    const result = await generateQuiz({ allQuestions });
    return { data: result };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to generate a quiz. Please try again.' };
  }
}


type TrafficSignQuestionResult = {
    data?: TrafficSignQuestion;
    error?: string;
}

export async function getTrafficSignPracticeQuestion(signId: string): Promise<TrafficSignQuestionResult> {
    try {
        const sign = trafficSigns.find(s => s.id === signId);
        if (!sign) {
            return { error: 'Traffic sign not found.' };
        }
        const { titleEnglish, category, description } = sign;
        const result = await generateTrafficSignQuestion({ titleEnglish, category, description });
        return { data: result };
    } catch (e) {
        console.error(e);
        return { error: 'Failed to generate a practice question for the sign. Please try again.' };
    }
}

export async function updateUserXp(xp: number) {
  try {
    const token = cookies().get('auth_token')?.value;
    if (!token) {
      return { success: false, message: 'Not authenticated' };
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const { payload } = await jwtVerify(token, secret);

    if (!payload.email) {
      return { success: false, message: 'Invalid token payload' };
    }

    await connectDB();
    const user = await User.findOne({ email: payload.email });

    if (!user) {
      return { success: false, message: 'User not found' };
    }

    user.xp += xp;
    await user.save();

    return { success: true, newXp: user.xp };
  } catch (error) {
    console.error('Failed to update XP:', error);
    return { success: false, message: 'An error occurred while updating XP.' };
  }
}
