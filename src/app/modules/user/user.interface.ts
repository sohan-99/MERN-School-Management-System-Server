export type IUser = {
  id: string;
  password: string;
  needPasswordChange: boolean;
  role: 'admin' | 'student' | 'teacher';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
