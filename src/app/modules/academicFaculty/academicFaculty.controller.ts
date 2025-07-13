import catchAsyncFunction from '../../utils/catchAsyncFunction';
import sendResponse from '../../utils/sendResponse';
import { AcademicFacultyService } from './academicFaculty.service';
import { StatusCodes } from 'http-status-codes';
const createAcademicFaculty = catchAsyncFunction(async (req, res) => {
  const payload = req.body;
  const result =
    await AcademicFacultyService.createAcademicFacultyIntoDB(payload);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Academic faculty created successfully',
    data: result,
  });
});

const getAllAcademicFaculties = catchAsyncFunction(async (req, res) => {
  const result = await AcademicFacultyService.getAllAcademicFacultiesFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic faculties retrieved successfully',
    data: result,
  });
});

const getSingleAcademicFaculty = catchAsyncFunction(async (req, res) => {
  const { facultyId } = req.params;
  const result =
    await AcademicFacultyService.getSingleAcademicFacultyFromDB(facultyId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic faculty retrieved successfully',
    data: result,
  });
});

const updateAcademicFaculty = catchAsyncFunction(async (req, res) => {
  const { facultyId } = req.params;
  const payload = req.body;
  const result = await AcademicFacultyService.updateAcademicFacultyInDB(
    facultyId,
    payload,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic faculty updated successfully',
    data: result,
  });
});

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
