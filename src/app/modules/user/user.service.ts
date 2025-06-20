import { IStudent } from '../student/student.interface';
import { User } from './user.model';

const createStudentINtoDB = async (studentData: IStudent) => {
  // if (await studentModel.isUserExist(studentData.id)) {
  //   throw new Error('Student with this ID already exists');
  // }
  const result = await User.create(studentData);
  return result;
};

export const UserService = {
  createStudentINtoDB,
};
