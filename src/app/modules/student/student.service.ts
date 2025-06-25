import { Student } from "./student.model";


// get all students from the database
const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};
// get single student by id from the database
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};
// delete student
// const deleteStudentFromDB = async (id: string) => {
//   const result = await studentModel.updateOne({ id }, { isDeleted: true });
//   return result;
// };

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};
export const studentService = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
