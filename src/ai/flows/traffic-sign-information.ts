'use server';

/**
 * @fileOverview Traffic Sign Information Flow: Analyzes a traffic sign image and provides detailed information including name in Bangla and English,
 * category, explanation, and AI-generated questions about the sign.
 *
 * - trafficSignInformation -  function that handles the traffic sign information retrieval process.
 * - TrafficSignInformationInput - The input type for the trafficSignInformation function.
 * - TrafficSignInformationOutput - The return type for the trafficSignInformation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TrafficSignInformationInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo of a traffic sign, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // asdf
    ),
});

export type TrafficSignInformationInput = z.infer<typeof TrafficSignInformationInputSchema>;

const TrafficSignInformationOutputSchema = z.object({
  nameBangla: z.string().describe('The name of the traffic sign in Bangla.'),
  nameEnglish: z.string().describe('The name of the traffic sign in English.'),
  category: z.string().describe('The category of the traffic sign.'),
  explanation: z.string().describe('An explanation of the traffic sign.'),
  aiGeneratedQuestions: z.array(z.string()).describe('AI-generated questions about the traffic sign.'),
});

export type TrafficSignInformationOutput = z.infer<typeof TrafficSignInformationOutputSchema>;

export async function trafficSignInformation(input: TrafficSignInformationInput): Promise<TrafficSignInformationOutput> {
  return trafficSignInformationFlow(input);
}

const trafficSignInformationPrompt = ai.definePrompt({
  name: 'trafficSignInformationPrompt',
  input: {schema: TrafficSignInformationInputSchema},
  output: {schema: TrafficSignInformationOutputSchema},
  prompt: `You are an expert on Bangladeshi traffic signs. Given an image of a traffic sign, you will provide detailed information about it.

    Provide the following information:
    - nameBangla: The name of the traffic sign in Bangla.
    - nameEnglish: The name of the traffic sign in English.
    - category: The category of the traffic sign.
    - explanation: An explanation of what the traffic sign means and what drivers should do when they see it.
    - aiGeneratedQuestions: Create 3 different questions about the traffic sign which tests knowledge about the sign.

    Use the following image as the primary source of information about the traffic sign.

    Photo: {{media url=photoDataUri}}

    Make sure all text is appropriate for someone studying for the Bangladeshi driving test. Return in JSON format.
    `,
});

const trafficSignInformationFlow = ai.defineFlow(
  {
    name: 'trafficSignInformationFlow',
    inputSchema: TrafficSignInformationInputSchema,
    outputSchema: TrafficSignInformationOutputSchema,
  },
  async input => {
    const {output} = await trafficSignInformationPrompt(input);
    return output!;
  }
);
