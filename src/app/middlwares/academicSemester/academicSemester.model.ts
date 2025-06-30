import { Schema, model } from 'mongoose';
import { IAcademicSemester } from './academicSemester.interface';
import {
  academicSemesterCode,
  academicSemesterName,
  months,
} from './academicSemester.const';

const AcademicSemesterSchema = new Schema<IAcademicSemester>({
  name: {
    type: String,
    enum: academicSemesterName,
    required: true,
  },
  code: {
    type: String,
    enum: academicSemesterCode,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    enum: months,
    required: true,
  },
  endMonth: {
    type: String,
    enum: months,
    required: true,
  },
});

export const AcademicSemester = model<IAcademicSemester>(
  'AcademicSemester',
  AcademicSemesterSchema,
);
