import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsyncFunction from '../../utils/catchAsyncFunction';

const createStudent = catchAsyncFunction(async (req, res) => {
  const { password, student: studentData } = req.body;
  const result = await UserService.createStudentINtoDB(password, studentData);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
};
