import { z } from 'zod';

const academicFacultyValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'Academic faculty name must be a string',
    })
    .min(2)
    .max(100),
});

export const academicFacultyValidation = {
  academicFacultyValidationSchema,
};
