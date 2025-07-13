import { IAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    { role: 'student' },
    { id: 1, _id: 0 },
    { sort: { createdAt: -1 } },
  ).lean();
  // lastStudent?.id is like '2025010001' (year+code+serial)
  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateStudentId = async (payload: IAcademicSemester) => {
  // first time 0000
  let currentId = (0).toString();

  const lastStudentId = await findLastStudentId();
  const lastStudentSemesterCode = lastStudentId?.slice(4, 6); //01
  const lastStudentYear = lastStudentId?.slice(0, 4); //2025
  const currentSemesterCode = payload.code; //01
  const currentYear = payload.year; //2025

  if (
    lastStudentId &&
    lastStudentSemesterCode !== currentSemesterCode &&
    lastStudentYear === currentYear
  ) {
    currentId = lastStudentId.substring(6); // 0001
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};
