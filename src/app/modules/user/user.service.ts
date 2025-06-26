import config from '../../config';
import { IStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { IUser } from './user.interface';
import { User } from './user.model';

const createStudentINtoDB = async (password: string, studentData: IStudent) => {
  // create a user object
  const userData: Partial<IUser> = {};

  //  if password is not provided, then set default password
  userData.password = password || (config.default_password as string);
  //  set student role
  userData.role = 'student';
  // set menually created user id
  userData.id = '2030100002';

  // create a user in db
  const newUser = await User.create(userData);
  // create a student
  studentData.id = newUser.id;
  studentData.user = newUser._id;

  // console.log(studentData, 'studentData');
  const newStudent = await Student.create(studentData);
  return newStudent;
};

export const UserService = {
  createStudentINtoDB,
};
