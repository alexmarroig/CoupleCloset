import { z } from 'zod';

export const quizResultSchema = z.object({
  quizId: z.string().uuid(),
  answers: z.record(z.string(), z.string()),
  score: z.record(z.string(), z.any()).optional()
});

export const quizCreateSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  scope: z.enum(['USER', 'COUPLE']),
  isActive: z.boolean().optional(),
  questions: z.array(
    z.object({
      text: z.string().min(1),
      order: z.number().int(),
      options: z.array(
        z.object({
          text: z.string().min(1),
          value: z.string().min(1)
        })
      )
    })
  )
});
