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
    trim: true,
    maxlength: [20, 'First name must be less than or equal to 20 characters'],
    minlength: [3, 'First name must be more than or equal to 3 characters'],
    validate: {
      validator: function (value) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: '{VALUE} must start with an uppercase letter',
    },
  },
  middleName: {
    type: String,
    required: false,
    trim: true,
    maxlength: [20, 'Middle name must be less than or equal to 20 characters'],
    minlength: [3, 'Middle name must be more than or equal to 3 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [20, 'Last name must be less than or equal to 20 characters'],
    minlength: [3, 'Last name must be more than or equal to 3 characters'],
  },
});
// Define the schema for the Gurdian model
const GurdianSchema = new Schema<IGurdian>({
  fatherName: { type: String, required: [true, 'Father name is required'] },
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation is required'],
    trim: true,
    maxlength: [
      20,
      'Father occupation must be less than or equal to 20 characters',
    ],
    minlength: [
      3,
      'Father occupation must be more than or equal to 3 characters',
    ],
  },
  fatherContact: {
    type: String,
    required: [true, 'Father contact is required'],
    trim: true,
    maxlength: [
      15,
      'Father contact must be less than or equal to 15 characters',
    ],
    minlength: [
      10,
      'Father contact must be more than or equal to 10 characters',
    ],
  },
  motherName: { type: String, required: [true, 'Mother name is required'] },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required'],
    trim: true,
    maxlength: [
      20,
      'Mother occupation must be less than or equal to 20 characters',
    ],
    minlength: [
      3,
      'Mother occupation must be more than or equal to 3 characters',
    ],
  },
  motherContact: {
    type: String,
    required: [true, 'Mother contact is required'],
    trim: true,
    maxlength: [
      15,
      'Mother contact must be less than or equal to 15 characters',
    ],
    minlength: [
      10,
      'Mother contact must be more than or equal to 10 characters',
    ],
  },
});
// Define the schema for the localGuardian model
const localGuardianSchema = new Schema<ILocalGuardian>({
  name: { type: String, required: [true, 'Local guardian name is required'] },
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation is required'],
    trim: true,
    maxlength: [
      20,
      'Local guardian occupation must be less than or equal to 20 characters',
    ],
    minlength: [
      3,
      'Local guardian occupation must be more than or equal to 3 characters',
    ],
  },
  contactNumber: {
    type: String,
    required: [true, 'Local guardian contact number is required'],
    trim: true,
    maxlength: [
      15,
      'Local guardian contact number must be less than or equal to 15 characters',
    ],
    minlength: [
      10,
      'Local guardian contact number must be more than or equal to 10 characters',
    ],
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required'],
    trim: true,
    maxlength: [
      100,
      'Local guardian address must be less than or equal to 100 characters',
    ],
    minlength: [
      10,
      'Local guardian address must be more than or equal to 10 characters',
    ],
  },
});
const StudentSchema = new Schema<IStudent>({
  id: {
    type: String,
    required: [true, 'Student ID is required'],
    trim: true,
    maxlength: [20, 'Student ID must be less than or equal to 20 characters'],
    minlength: [3, 'Student ID must be more than or equal to 3 characters'],
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
    trim: true,
  },
  emargencyContact: {
    type: String,
    required: [true, 'Emergency contact is required'],
    trim: true,
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
    trim: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
    trim: true,
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
