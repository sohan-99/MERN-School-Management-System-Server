import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

// will call controlar function to get all students
router.post('/create-student', studentController.createStudent);

export const StudentRoutes = router;
