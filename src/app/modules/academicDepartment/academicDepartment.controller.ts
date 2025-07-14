import { StatusCodes } from 'http-status-codes';
import catchAsyncFunction from '../../utils/catchAsyncFunction';
import { AcademicDepartmentService } from './academicDepartment.service';
import sendResponse from '../../utils/sendResponse';
const createAcademicDepartment = catchAsyncFunction(async (req, res) => {
  const payload = req.body;
  const result =
    await AcademicDepartmentService.createAcademicDepartmentIntoDB(payload);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Academic department created successfully',
    data: result,
  });
});

const getAllAcademicDepartments = catchAsyncFunction(async (req, res) => {
  const result =
    await AcademicDepartmentService.getAllAcademicDepartmentsFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic departments retrieved successfully',
    data: result,
  });
});

const getSingleAcademicDepartment = catchAsyncFunction(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await AcademicDepartmentService.getSingleAcademicDepartmentFromDB(
      departmentId,
    );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic department retrieved successfully',
    data: result,
  });
});

const updateAcademicDepartment = catchAsyncFunction(async (req, res) => {
  const { departmentId } = req.params;
  const payload = req.body;
  const result = await AcademicDepartmentService.updateAcademicDepartmentInDB(
    departmentId,
    payload,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic department updated successfully',
    data: result,
  });
});

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
