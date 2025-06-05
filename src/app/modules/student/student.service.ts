import { studentModel } from '../student.model';
import { IStudent } from './student.interface';

const createStudentINtoDB = async (student: IStudent) => {
  const result = await studentModel.create(student);
  return result;
};

export const studentService = {
  createStudentINtoDB,
};
