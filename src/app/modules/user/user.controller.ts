
import { Request, Response } from 'express';
import { UserService } from './user.service';

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
    const {password, student: studentData } = req.body;
    // const zodParsedData = studentZodValidationSchema.parse(studentData);

    const result = await UserService.createStudentINtoDB(
      password,
      studentData,
    );

    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    if (isZodError(err)) {
       res.status(400).json({
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

export const UserController = {
  createStudent,
};