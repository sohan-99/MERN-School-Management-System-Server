import { z } from 'zod';

const userValidationSchema = z.object({
  id: z.string().min(3).max(20),
  password: z
    .string()
    .min(6, {
      message: 'Password must be more than or equal to 6 characters',
    })
    .max(20, {
      message: 'Password must be less than or equal to 20 characters',
    }),
  needPasswordChange: z.boolean().default(true),
  role: z.enum(['admin', 'student', 'teacher']),
  status: z.enum(['in-progress', 'blocked']).default('in-progress'),
  isDeleted: z.boolean().default(false),
});
export const userValidation = {
  userValidationSchema,
};
