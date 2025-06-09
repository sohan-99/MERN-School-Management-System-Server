import { Request, Response } from 'express';
import { studentService } from './student.service';
import { validateStudent } from './student.validation';
// Create a new student
// const createStudent = async (req: Request, res: Response) => {
//   //create a schema for validation string joi\
//   const JoiValidationSchema = Joi.object({
//     id: Joi.string().min(3).max(20).required(),

//     name: Joi.object({
//       firstName: Joi.string()
//         .trim()
//         .min(3)
//         .max(20)
//         .required()
//         .custom((value, helpers) => {
//           const firstChar = value.charAt(0);
//           if (firstChar !== firstChar.toUpperCase()) {
//             return helpers.message({ custom: 'First name must start with an uppercase letter' });
//           }
//           return value;
//         }),
//       middleName: Joi.string().trim().min(3).max(20).optional(),
//       lastName: Joi.string()
//         .trim()
//         .required()
//         .custom((value, helpers) => {
//           if (!/^[A-Za-z]+$/.test(value)) {
//             return helpers.message({ custom: 'Last name must be alphabetic' });
//           }
//           return value;
//         }),
//     }).required(),

//     gender: Joi.string().valid('male', 'female', 'other').required(),

//     dateOfBirth: Joi.string().optional(),

//     email: Joi.string().email().required(),

//     contactNumber: Joi.string().trim().min(10).max(15).required(),

//     emargencyContact: Joi.string().trim().min(10).max(15).required(),

//     bloodGroup: Joi.string().valid('O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-').optional(),

//     presentAddress: Joi.string().min(10).max(100).required(),

//     permanentAddress: Joi.string().min(10).max(100).required(),

//     gurdian: Joi.object({
//       fatherName: Joi.string().required(),
//       fatherOccupation: Joi.string().trim().min(3).max(20).required(),
//       fatherContact: Joi.string().trim().min(10).max(15).required(),
//       motherName: Joi.string().required(),
//       motherOccupation: Joi.string().trim().min(3).max(20).required(),
//       motherContact: Joi.string().trim().min(10).max(15).required(),
//     }).required(),

//     localGuardian: Joi.object({
//       name: Joi.string().required(),
//       occupation: Joi.string().trim().min(3).max(20).required(),
//       contactNumber: Joi.string().trim().min(10).max(15).required(),
//       address: Joi.string().trim().min(10).max(100).required(),
//     }).required(),

//     profileImg: Joi.string().uri().optional(),

//     isActive: Joi.string().valid('Active', 'blocked').default('Active'),
//   });

//   try {
//     const { student: studentData } = req.body;
//     const { error, value } = JoiValidationSchema.validate(studentData);
//     console.log({error}, {value});
//     const result = await studentService.createStudentINtoDB(value);
//     res.status(200).json({
//       success: true,
//       message: 'Student created successfully',
//       data: result,
//     });
//   } catch (error) {
//     // console.log('Error creating student:', error);
//       return res.status(400).json({
//     success: false,
//     message: "something went wrong",
//     error
//     });
//   }
// };
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const { error, value } = validateStudent(studentData);

    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        error: {
          _original: error._original,
          details: error.details,
        },
      });
    }

    const result = await studentService.createStudentINtoDB(value);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create student',
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

// Get all students
const getallStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve students',
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
// get single student by id
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentFromDB(studentId);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve student',
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

export const studentController = {
  createStudent,
  getallStudents,
  getSingleStudent,
};
