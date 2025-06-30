import { z } from 'zod';
import {
  academicSemesterCode,
  academicSemesterName,
  months,
} from './academicSemester.const';

export const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...academicSemesterName] as [string, ...string[]]),
    code: z.enum([...academicSemesterCode] as [string, ...string[]]),
    year: z.string().min(4).max(4),
    startMonth: z.enum([...months] as [string, ...string[]]),
    endMonth: z.enum([...months] as [string, ...string[]]),
  }),
});

export const academicSemesterValidation = {
  createAcademicSemesterValidationSchema,
};
