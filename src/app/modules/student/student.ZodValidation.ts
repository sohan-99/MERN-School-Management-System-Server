import { z } from 'zod';

export const studentZodValidationSchema = z.object({
  id: z.string().min(3).max(20),
  password: z
    .string()
    .min(6, {
      message: 'Password must be more than or equal to 6 characters',
    })
    .max(20, {
      message: 'Password must be less than or equal to 20 characters',
    }),
  name: z.object({
    firstName: z
      .string()
      .min(3, {
        message: 'First name must be more than or equal to 3 characters',
      })
      .max(20, {
        message: 'First name must be less than or equal to 20 characters',
      })
      .refine(val => val.charAt(0) === val.charAt(0).toUpperCase(), {
        message: 'First name must start with an uppercase letter',
      }),
    middleName: z.string().min(3).max(20).optional(),
    lastName: z
      .string()
      .min(1)
      .refine(val => /^[A-Za-z]+$/.test(val), {
        message: 'Last name must be alphabetic',
      }),
  }),
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().optional(),
  email: z.string().email(),
  contactNumber: z.string().min(10).max(15),
  emargencyContact: z.string().min(10).max(15),
  bloodGroup: z
    .enum(['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'])
    .optional(),
  presentAddress: z.string().min(10).max(100),
  permanentAddress: z.string().min(10).max(100),
  gurdian: z.object({
    fatherName: z.string(),
    fatherOccupation: z.string().min(3).max(20),
    fatherContact: z.string().min(10).max(15),
    motherName: z.string(),
    motherOccupation: z.string().min(3).max(20),
    motherContact: z.string().min(10).max(15),
  }),
  localGuardian: z.object({
    name: z.string(),
    occupation: z.string().min(3).max(20),
    contactNumber: z.string().min(10).max(15),
    address: z.string().min(10).max(100),
  }),
  profileImg: z.string().url().optional(),
  isActive: z.enum(['Active', 'blocked']).default('Active'),
});

export const validateZodStudent = (studentData: unknown) => {
  return studentZodValidationSchema.safeParse(studentData);
};
