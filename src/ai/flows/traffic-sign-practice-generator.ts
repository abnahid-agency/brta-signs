'use server';

/**
 * @fileOverview AI-powered practice question generator for traffic signs.
 *
 * - generateTrafficSignQuestion - A function that creates a multiple-choice question for a given traffic sign.
 * - TrafficSignQuestionInput - The input type, containing details about the sign.
 * - TrafficSignQuestion - The output type, containing the generated question, options, and explanation.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TrafficSignQuestionInputSchema = z.object({
  titleEnglish: z.string().describe("The English name of the traffic sign."),
  category: z.string().describe("The category of the traffic sign (e.g., 'Mandatory', 'Warning')."),
  description: z.string().describe("A brief description of the traffic sign's meaning."),
});

export type TrafficSignQuestionInput = z.infer<typeof TrafficSignQuestionInputSchema>;

const TrafficSignQuestionSchema = z.object({
  question: z.string().describe("The multiple-choice question text in Bangla, based on the sign's image."),
  options: z.object({
    a: z.string(),
    b: z.string(),
    c: z.string(),
    d: z.string(),
  }),
  correctOption: z.enum(['a', 'b', 'c', 'd']).describe("The key of the correct option."),
  explanation: z.string().describe("A brief explanation of the correct answer in Bangla."),
});

export type TrafficSignQuestion = z.infer<typeof TrafficSignQuestionSchema>;

export async function generateTrafficSignQuestion(input: TrafficSignQuestionInput): Promise<TrafficSignQuestion> {
  return trafficSignQuestionFlow(input);
}

const trafficSignQuestionPrompt = ai.definePrompt({
  name: 'trafficSignQuestionPrompt',
  input: {schema: TrafficSignQuestionInputSchema},
  output: {schema: TrafficSignQuestionSchema},
  prompt: `You are an AI assistant for a Bangladeshi driving license practice test application. Your task is to generate a single multiple-choice question in Bangla based on a provided traffic sign. The question should test the user's understanding of what the sign means or what action to take when they see it.

    You will be given the English title, category, and description of the traffic sign.

    Based on the sign's image (which the user sees), generate:
    - A relevant question in Bangla.
    - Four plausible options (a, b, c, d) in Bangla. One option must be correct.
    - The options should be randomized, so the correct answer isn't always in the same position.
    - The key ('a', 'b', 'c', or 'd') of the correct option.
    - A brief explanation in Bangla for the correct answer.

    Traffic Sign Information:
    - English Title: {{{titleEnglish}}}
    - Category: {{{category}}}
    - Description: {{{description}}}
    
    Example Question Style:
    Question: "এই চিহ্নটি দ্বারা কী বোঝানো হয়েছে?" (What does this sign mean?)
    Options:
    a) সামনে স্পিড ব্রেকার (Speed breaker ahead)
    b) রাস্তা পিচ্ছিল (Slippery road)
    c) সামনে হাসপাতাল (Hospital ahead)
    d) সামনে স্কুল (School ahead)

    Return the single question in a JSON object that adheres to the output schema.
    `,
});

const trafficSignQuestionFlow = ai.defineFlow(
  {
    name: 'trafficSignQuestionFlow',
    inputSchema: TrafficSignQuestionInputSchema,
    outputSchema: TrafficSignQuestionSchema,
  },
  async input => {
    const {output} = await trafficSignQuestionPrompt(input);
    return output!;
  }
);
