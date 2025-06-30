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

const getAllAcademicSemesters = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.getAllAcademicSemesters();
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Academic Semesters retrieved successfully',
      data: result,
    });
  },
);

const getSingleAcademicSemester = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicSemesterService.getSingleAcademicSemester(id);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Academic Semester retrieved successfully',
      data: result,
    });
  },
);

const updateAcademicSemester = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicSemesterService.updateAcademicSemester(
      id,
      req.body,
    );
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Academic Semester updated successfully',
      data: result,
    });
  },
);

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
