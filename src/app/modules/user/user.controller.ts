import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const isZodError = (err: unknown): err is { name: string; errors: unknown } => {
  if (typeof err === 'object' && err !== null) {
    const e = err as Record<string, unknown>;
    return e.name === 'ZodError' && 'errors' in e;
  }
  return false;
};

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await UserService.createStudentINtoDB(password, studentData);

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (err) {
    if (isZodError(err)) {
      sendResponse(res, {
        statusCode: StatusCodes.BAD_REQUEST,
        success: false,
        message: 'Validation failed',
        data: (err as { errors: unknown }).errors,
      });
    }
    next(err);
  }
};

export const UserController = {
  createStudent,
};
