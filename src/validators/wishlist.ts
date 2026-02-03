import { z } from 'zod';

export const wishlistCreateSchema = z.object({
  shopifyProductId: z.string().min(1),
  title: z.string().min(1),
  imageUrl: z.string().url().optional(),
  price: z.number().positive()
});

export const wishlistUpdateSchema = z.object({
  status: z.enum(['AVAILABLE', 'RESERVED', 'PURCHASED'])
});
