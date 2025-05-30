import { studentModel } from "../student.model";
import { Student } from "./student.interface";

const createStudentINtoDB =async(student:Student)=>{

 const result = await studentModel.create(student);
  return result;
}

export const studentService = {
  
  createStudentINtoDB,
};