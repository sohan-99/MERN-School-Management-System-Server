import { Schema, model } from 'mongoose';
import {
  IAcademicSemester,
  IAcademicSemesterCode,
  IAcademicSemesterName,
  IMonths,
} from './academicSemester.interface';

const months: IMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const academicSemesterName: IAcademicSemesterName[] = [
  'Autumn',
  'Summer',
  'Fall',
];
const academicSemesterCode: IAcademicSemesterCode[] = ['01', '02', '03'];
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
    type: Date,
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
