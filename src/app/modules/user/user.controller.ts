
import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';

const isZodError = (err: unknown): err is { name: string; errors: unknown } => {
  if (typeof err === 'object' && err !== null) {
    const e = err as Record<string, unknown>;
    return e.name === 'ZodError' && 'errors' in e;
  }
  return false;
};

// Create a new student
const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, student: studentData } = req.body;
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
    next(err);
  }
};

export const UserController = {
  createStudent,
};