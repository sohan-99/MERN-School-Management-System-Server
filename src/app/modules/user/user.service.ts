import config from '../../config';
import { IStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { IUser } from './user.interface';
import { User } from './user.model';

const createStudentINtoDB = async (password: string, studentData: IStudent) => {
  const userData: Partial<IUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = 'student';
  userData.id = '2030100002';

  const newUser = await User.create(userData);
  studentData.id = newUser.id;
  studentData.user = newUser._id;

  const newStudent = await Student.create(studentData);
  return newStudent;
};

export const UserService = {
  createStudentINtoDB,
};
