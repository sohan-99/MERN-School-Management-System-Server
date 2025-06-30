import { AcademicSemester } from './academicSemester.model';
import { IAcademicSemester } from './academicSemester.interface';
import { academicSemesterNameCodeMapper } from './academicSemester.const';

const createAcademicSemesterIntoDB = async (payload: IAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semester code for the given semester name');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoDB,
};
