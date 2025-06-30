import { Request, Response } from 'express';
import catchAsyncFunction from '../../utils/catchAsyncFunction';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const createAcademicSemester = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.createAcademicSemesterIntoDB(
      req.body,
    );
    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: 'Academic Semester created successfully',
      data: result,
    });
  },
);

export const AcademicSemesterController = {
  createAcademicSemester,
};
