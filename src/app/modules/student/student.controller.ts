import { Request, Response } from 'express';
import { studentService } from './student.service';

// Get all students
const getallStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve students',
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
// get single student by id
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentFromDB(studentId);
    if (!result) {
      res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve student',
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error instanceof Error ? error.message : 'Failed to delete student',
      error: error,
    });
  }
};

export const studentController = {
  getallStudents,
  getSingleStudent,
  deleteStudent,
};
