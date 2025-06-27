import { studentService } from './student.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsyncFunction from '../../utils/catchAsyncFunction';

const getallStudents = catchAsyncFunction(async (req, res) => {
  const result = await studentService.getAllStudentsFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Students retrieved successfully',
    data: result,
  });
});

const getSingleStudent = catchAsyncFunction(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentService.getSingleStudentFromDB(studentId);
  if (!result) {
    sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      success: false,
      message: 'Student not found',
    });
    return;
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Student retrieved successfully',
    data: result,
  });
});
const deleteStudent = catchAsyncFunction(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentService.deleteStudentFromDB(studentId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Student deleted successfully',
    data: result,
  });
});

export const studentController = {
  getallStudents,
  getSingleStudent,
  deleteStudent,
};
