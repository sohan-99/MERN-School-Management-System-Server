import { Request, Response } from "express";
import { studentService } from "./student.service";


const createStudent = async (req: Request, res: Response) => {

  try {
    const student = req.body;
    const result = await studentService.createStudentINtoDB(student);
    res.status(200).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    console.log("Error creating student:", error);
    // res.status(500).json({
    //   success: false,
    //   message: "Failed to create student",
    //   error: error instanceof Error ? error.message : String(error),
    // });
  }
}

export const studentController = {
  createStudent,
};
