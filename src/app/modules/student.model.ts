import { Schema, model } from 'mongoose';
import {
  IGurdian,
  ILocalGuardian,
  IStudent,
  IUserName,
} from './student/student.interface';
// // Define the schemas for the Student model
const userNameSchema = new Schema<IUserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: true,
  },
});
// Define the schema for the Gurdian model
const GurdianSchema = new Schema<IGurdian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContact: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContact: { type: String, required: true },
});
// Define the schema for the localGuardian model
const localGuardianSchema = new Schema<ILocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
});
const StudentSchema = new Schema<IStudent>({
  id: { type: String },
  name: userNameSchema,
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emargencyContact: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gurdian: GurdianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String, required: false },
  isActive: {
    type: String,
    enum: ['Active', 'blocked'],
    required: true,
  },
});

// Create the Student model
export const studentModel = model<IStudent>('Student', StudentSchema);
