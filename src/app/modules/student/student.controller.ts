import { Request, Response } from 'express';
import { studentService } from './student.service';
// import { validateStudent } from './student.validation';
import { studentZodValidationSchema } from './student.ZodValidation';

const isZodError = (err: unknown): err is { name: string; errors: unknown } => {
  if (typeof err === 'object' && err !== null) {
    const e = err as Record<string, unknown>;
    return e.name === 'ZodError' && 'errors' in e;
  }
  return false;
};

// Create a new student
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const zodParsedData = studentZodValidationSchema.parse(studentData);

    const result = await studentService.createStudentINtoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    if (isZodError(err)) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        error: (err as { errors: unknown }).errors,
      });
    }
    res.status(500).json({
      success: false,
      message: err instanceof Error ? err.message : 'something went wrong',
      error: err,
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
