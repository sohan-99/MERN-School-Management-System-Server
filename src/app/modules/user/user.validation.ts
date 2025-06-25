import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      required_error: 'Password is must be provided',
      invalid_type_error: 'Password must be a string',
    })
    .min(6, {
      message: 'Password must be more than or equal to 6 characters',
    })
    .max(20, {
      message: 'Password must be less than or equal to 20 characters',
    })
    .optional(),
});
export const userValidation = {
  userValidationSchema,
};
