import { studentModel } from '../student.model';
import { IStudent } from './student.interface';
// create data into the database
// and return the result
const createStudentINtoDB = async (student: IStudent) => {
  const result = await studentModel.create(student);
  return result;
};
// get all students from the database
const getAllStudentsFromDB = async () => {
  const result = await studentModel.find();
  return result;
};
// get single student by id from the database
const getSingleStudentFromDB = async (id: string) => {
  const result = await studentModel.findOne({ id });
  return result;
};
export const studentService = {
  createStudentINtoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
