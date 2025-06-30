import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validationRequest from '../validateRequst';
import { academicSemesterValidation } from './academicSemester.Validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validationRequest(
    academicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
