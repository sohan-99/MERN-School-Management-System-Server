import { model, Schema } from 'mongoose';
import { IAcademicDepartment } from './academicDepartment.interface';

const academicDepartmentSchema = new Schema<IAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
    },
  },
  {
    timestamps: true,
  },
);

// Pre-save middleware to check for existing departments
academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await AcademicDepartment.findOne({
    name: this.name,
  });

  if (isDepartmentExist) {
    throw new Error('This department is already exist!');
  }

  next();
});

// academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
//   const query = this.getQuery();
//   const isDepartmentExist = await AcademicDepartment.findOne(query);

//   if (!isDepartmentExist) {
//     throw new Error('This department does not exist!');
//   }

//   next();
// });

export const AcademicDepartment = model<IAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);
