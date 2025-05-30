import { Schema, model} from 'mongoose';
import { Gurdian, localGuardian, Student, userName } from './student/student.interface';
// // Define the schemas for the Student model
const userNameSchema = new Schema<userName>(
{
    firstName: {
       type: String,
        required: true
       },
    middleName: { 
      type: String,
       required: false
       },
    lastName: {
       type: String,
        required: true 
      }
  }
)
// Define the schema for the Gurdian model
const GurdianSchema = new Schema<Gurdian>(
{
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContact: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContact: { type: String, required: true }
  }
)
// Define the schema for the localGuardian model
const localGuardianSchema = new Schema<localGuardian>(
{
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true }
  }
)
const StudentSchema = new Schema<Student>({
  id: { type: String},
  name: userNameSchema,
  gender: {
    enum: ["male", "female", "other"],
    required: true
  },
  dateOfBirth: {
     type: String,
    },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emargencyContact: { type: String, required: true },
  bloodGroup: {
    enum: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
    required: false
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gurdian: GurdianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String, required: false },
  IsActive: {
    enum: ["Active", "blocked"],
    required: true
  }
});

// Create the Student model
export const studentModel = model<Student>('Student', StudentSchema);