/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const message = error.message || 'Internal Server Error';

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message,
    error: error,
  });
};

export default globalErrorHandler;
