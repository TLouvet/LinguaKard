import { z } from 'zod';

export const quizAnswerSchema = z.object({
  answer: z
    .string()
    .min(1, 'La réponse ne peut pas être vide')
    .transform(val => val.toLowerCase().trim()),
});

export type QuizAnswerFormData = z.infer<typeof quizAnswerSchema>;
