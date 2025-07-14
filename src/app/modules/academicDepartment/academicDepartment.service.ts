import { IAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAcademicDepartmentIntoDB = async (
  payload: IAcademicDepartment,
): Promise<IAcademicDepartment> => {
  const result = await AcademicDepartment.create(payload);
  if (!result) {
    throw new Error('Failed to create academic department');
  }
  return result;
};

const getAllAcademicDepartmentsFromDB = async (): Promise<
  IAcademicDepartment[]
> => {
  const result = await AcademicDepartment.find();
  if (!result) {
    throw new Error('Failed to retrieve academic departments');
  }
  return result;
};

const getSingleAcademicDepartmentFromDB = async (
  id: string,
): Promise<IAcademicDepartment | null> => {
  const result = await AcademicDepartment.findById(id);
  if (!result) {
    throw new Error('Academic department not found');
  }
  return result;
};

const updateAcademicDepartmentInDB = async (
  id: string,
  payload: Partial<IAcademicDepartment>,
): Promise<IAcademicDepartment | null> => {
  const result = await AcademicDepartment.findByIdAndUpdate(id, payload, {
    new: true,
  });
  if (!result) {
    throw new Error('Failed to update academic department');
  }
  return result;
};
export const AcademicDepartmentService = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentsFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentInDB,
};
