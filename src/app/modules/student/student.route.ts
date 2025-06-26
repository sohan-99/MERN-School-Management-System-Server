import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

router.get('/:studentId', studentController.getSingleStudent);
router.delete('/:studentId', studentController.deleteStudent);
router.get('/', studentController.getallStudents);
export const StudentRoutes = router;
