import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(3, 'First name must be more than or equal to 3 characters')
    .max(20, 'First name must be less than or equal to 20 characters')
    .refine(value => /^[A-Z]/.test(value), {
      message: 'First name must start with an uppercase letter',
    }),
  middleName: z.string().min(3).max(20).optional(),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .refine(value => /^[A-Za-z]+$/.test(value), {
      message: 'Last name must be alphabetic',
    }),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, 'Father name is required'),
  fatherOccupation: z.string().min(3).max(20),
  fatherContact: z.string().min(10).max(15),
  motherName: z.string().min(1, 'Mother name is required'),
  motherOccupation: z.string().min(3).max(20),
  motherContact: z.string().min(10).max(15),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1, 'Local guardian name is required'),
  occupation: z.string().min(3).max(20),
  contactNumber: z.string().min(10).max(15),
  address: z.string().min(10).max(100),
});

export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.date().optional(),
      email: z.string().email(),
      contactNumber: z.string().min(1, 'Contact number is required'),
      emargencyContact: z.string().min(1, 'Emergency contact is required'),
      bloodGroup: z
        .enum(['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'])
        .optional(),
      presentAddress: z.string().min(1, 'Present address is required'),
      permanentAddress: z.string().min(1, 'Permanent address is required'),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImg: z.string().optional(),
    }),
  }),
});

export const studentValidationSchema = {
  createStudentValidationSchema,
};
