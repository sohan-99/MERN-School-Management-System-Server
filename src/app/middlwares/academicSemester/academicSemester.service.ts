import { AcademicSemester } from './academicSemester.model';
import { IAcademicSemesterCode } from './academicSemester.interface';

const createAcademicSemesterIntoDB = async (payload: IAcademicSemesterCode) => {
  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoDB,
};
