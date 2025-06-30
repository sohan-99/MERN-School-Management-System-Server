/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type IGurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContact: string;
  motherName: string;
  motherOccupation: string;
  motherContact: string;
};
export type IUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type ILocalGuardian = {
  name: string;
  occupation: string;
  contactNumber: string;
  address: string;
};

export type IStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: IUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: Date;
  email: string;
  contactNumber: string;
  emargencyContact: string;
  bloodGroup?: 'O+' | 'O-' | 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-';
  presentAddress: string;
  permanentAddress: string;
  gurdian: IGurdian;
  localGuardian: ILocalGuardian;
  profileImg?: string;
  isDeleted: boolean;
};

export interface IStudentModel extends Model<IStudent> {
  isUserExist: (id: string) => Promise<IStudent | null>;
}

export type StudentModel = Model<IStudent, Record<string, never>>;
