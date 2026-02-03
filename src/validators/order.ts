import { z } from 'zod';

export const orderCreateSchema = z.object({
  lineItems: z.array(
    z.object({
      productId: z.string().min(1),
      variantId: z.string().min(1),
      quantity: z.number().int().positive()
    })
  ),
  currency: z.string().min(1)
});
