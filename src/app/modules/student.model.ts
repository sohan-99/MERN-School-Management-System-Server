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
    required: [true, 'First name is required'],
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
});
// Define the schema for the Gurdian model
const GurdianSchema = new Schema<IGurdian>({
  fatherName: { type: String, required: [true, 'Father name is required'] },
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation is required'],
  },
  fatherContact: {
    type: String,
    required: [true, 'Father contact is required'],
  },
  motherName: { type: String, required: [true, 'Mother name is required'] },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required'],
  },
  motherContact: {
    type: String,
    required: [true, 'Mother contact is required'],
  },
});
// Define the schema for the localGuardian model
const localGuardianSchema = new Schema<ILocalGuardian>({
  name: { type: String, required: [true, 'Local guardian name is required'] },
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation is required'],
  },
  contactNumber: {
    type: String,
    required: [true, 'Local guardian contact number is required'],
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required'],
  },
});
const StudentSchema = new Schema<IStudent>({
  id: {
    type: String,
    required: [true, 'Student ID is required'],
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: "Gender must be either 'male', 'female', or 'other'",
    },
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  email: { type: String, required: [true, 'Email is required'] },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  emargencyContact: {
    type: String,
    required: [true, 'Emergency contact is required'],
  },
  bloodGroup: {
    type: String,
    enum: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  gurdian: {
    type: GurdianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: { type: String, required: false },
  isActive: {
    type: String,
    enum: ['Active', 'blocked'],
    default: 'Active',
  },
});

// Create the Student model
export const studentModel = model<IStudent>('Student', StudentSchema);
