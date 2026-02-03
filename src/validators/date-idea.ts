import { z } from 'zod';

export const dateIdeaCreateSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  scope: z.enum(['GENERAL', 'COUPLE']).optional(),
  coupleId: z.string().uuid().optional(),
  tagIds: z.array(z.string().uuid()).optional()
});
