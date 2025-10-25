'use server';

/**
 * @fileOverview AI Quiz Generation Flow: Generates a 20-question multiple-choice quiz
 * based on a provided set of existing questions.
 *
 * - generateQuiz -  function that handles the quiz generation process.
 * - QuizGenerationInput - The input type for the generateQuiz function.
 * - GeneratedQuiz - The return type for the generateQuiz function, containing the array of questions.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const QuizGenerationInputSchema = z.object({
  allQuestions: z.string().describe("A JSON string of all available questions to use as a knowledge base."),
});

export type QuizGenerationInput = z.infer<typeof QuizGenerationInputSchema>;

const QuizQuestionSchema = z.object({
  id: z.string().describe("A unique ID for the question."),
  topic: z.string().describe("The topic of the question, e.g., 'Driving Rules & Regulations'."),
  question: z.string().describe("The question text in Bangla."),
  options: z.object({
    a: z.string(),
    b: z.string(),
    c: z.string(),
    d: z.string(),
  }),
  correctOption: z.enum(['a', 'b', 'c', 'd']).describe("The key of the correct option."),
  explanation: z.string().describe("A brief explanation of the correct answer in Bangla."),
  imageId: z.string().optional().describe("The ID of an associated image, if any."),
});

const GeneratedQuizSchema = z.object({
    questions: z.array(QuizQuestionSchema),
});

export type GeneratedQuiz = z.infer<typeof GeneratedQuizSchema>;

export async function generateQuiz(input: QuizGenerationInput): Promise<GeneratedQuiz> {
  return quizGenerationFlow(input);
}

const quizGenerationPrompt = ai.definePrompt({
  name: 'quizGenerationPrompt',
  input: {schema: QuizGenerationInputSchema},
  output: {schema: GeneratedQuizSchema},
  prompt: `You are an AI assistant for a Bangladeshi driving license practice test application. Your task is to generate a 20-question multiple-choice quiz.

    Use the provided JSON data of existing questions as your knowledge base. Generate new questions that are similar in style, topic, and difficulty to the provided questions. Ensure the questions cover a variety of topics present in the knowledge base.

    For each question, provide:
    - A unique ID (e.g., "ai-gen-1", "ai-gen-2").
    - The question text in Bangla.
    - Four options (a, b, c, d) in Bangla.
    - The key of the correct option.
    - A brief explanation of the correct answer in Bangla.
    - Do NOT include an imageId.

    Knowledge Base of questions:
    {{{allQuestions}}}

    Return the 20 questions in a JSON object that adheres to the output schema.
    `,
});

const quizGenerationFlow = ai.defineFlow(
  {
    name: 'quizGenerationFlow',
    inputSchema: QuizGenerationInputSchema,
    outputSchema: GeneratedQuizSchema,
  },
  async input => {
    const {output} = await quizGenerationPrompt(input);
    return output!;
  }
);
