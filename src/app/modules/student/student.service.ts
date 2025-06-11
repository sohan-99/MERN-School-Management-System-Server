import { studentModel } from '../student.model';
import { IStudent } from './student.interface';
// create data into the database
// and return the result
const createStudentINtoDB = async (studentData: IStudent) => {
  if (await studentModel.isUserExist(studentData.id)) {
    throw new Error('Student with this ID already exists');
  }
  const result = await studentModel.create(studentData);

  // static methods

  // custom method to check if the user already exists
  // const Istudent = new studentModel(studentData);

  // if (await Istudent.isUserExist(studentData.id)) {
  //   throw new Error('Student with this ID already exists');
  // }

  // const result = await Istudent.save();
  // static method to check if the user already exists

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
