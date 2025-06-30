import express from 'express';
import { UserController } from './user.controller';
import { createStudentValidationSchema } from '../student/student.Validation';
import validationRequest from '../../middlwares/validateRequst';

const router = express.Router();

router.post(
  '/create-user',
  validationRequest(createStudentValidationSchema),
  UserController.createStudent,
);

export const UserRoute = router;
