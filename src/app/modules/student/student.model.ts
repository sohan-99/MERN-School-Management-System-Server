import { Schema, model } from 'mongoose';
import {
  IGurdian,
  ILocalGuardian,
  IStudent,
  IUserName,
  StudentModel,
} from '../student/student.interface';
import validator from 'validator';

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
    validate: {
      validator: (value: string) => {
        return validator.isAlpha(value);
      },
      message: '{VALUE} must be alphanumeric',
    },
  },
});

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
const StudentSchema = new Schema<IStudent, StudentModel>(
  {
    id: {
      type: String,
      required: [true, 'Student ID is required'],
      trim: true,
      maxlength: [20, 'Student ID must be less than or equal to 20 characters'],
      minlength: [3, 'Student ID must be more than or equal to 3 characters'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'UserID is required'],
      unique: true,
      ref: 'User',
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
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate: {
        validator: (value: string) => {
          return validator.isEmail(value);
        },
        message: '{VALUE} is not a valid email address',
      },
    },
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
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

StudentSchema.virtual('fullName').get(function () {
  return (
    this.name.firstName +
    (this.name.middleName ? ' ' + this.name.middleName : '') +
    ' ' +
    this.name.lastName
  );
});

// query middleware
// StudentSchema.pre('find', function (next) {
//   // console.log(this, 'query middleware:we will find data');
//   this.find({isDeleted: {$ne: true}});
//   next();
// });
StudentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

StudentSchema.statics.isUserExist = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

// StudentSchema.methods.isUserExist = async function (id: string) {
//   const existingUser = await studentModel.findOne({ id });
//   return existingUser;
// };

export const Student = model<IStudent, StudentModel>('Student', StudentSchema);
