import express from 'express';
import { UserController } from './user.controller';
import { createStudentValidationSchema } from '../student/student.Validation';
import validationRequest from '../../middlwares/validateRequst';

const router = express.Router();

router.post(
  '/create-student',
  validationRequest(createStudentValidationSchema),
  UserController.createStudent,
);

export const UserRoute = router;
