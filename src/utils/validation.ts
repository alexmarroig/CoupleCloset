import { ZodSchema } from 'zod';

export function parseSchema<T>(schema: ZodSchema<T>, payload: unknown): T {
  const result = schema.safeParse(payload);
  if (!result.success) {
    const message = result.error.errors.map((err) => err.message).join(', ');
    throw new Error(message);
  }
  return result.data;
}
