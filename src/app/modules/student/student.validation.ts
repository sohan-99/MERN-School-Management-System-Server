import Joi from 'joi';

// Validation schema for student model
export const studentJoiValidationSchema = Joi.object({
  id: Joi.string().min(3).max(20).required(),
  name: Joi.object({
    firstName: Joi.string()
      .trim()
      .min(3)
      .max(20)
      .required()
      .custom((value, helpers) => {
        const firstChar = value.charAt(0);
        if (firstChar !== firstChar.toUpperCase()) {
          return helpers.message({
            custom: 'First name must start with an uppercase letter',
          });
        }
        return value;
      }),
    middleName: Joi.string().trim().min(3).max(20).optional(),
    lastName: Joi.string()
      .trim()
      .required()
      .custom((value, helpers) => {
        if (!/^[A-Za-z]+$/.test(value)) {
          return helpers.message({ custom: 'Last name must be alphabetic' });
        }
        return value;
      }),
  }).required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  dateOfBirth: Joi.string().optional(),
  email: Joi.string().email().required(),
  contactNumber: Joi.string().trim().min(10).max(15).required(),
  emargencyContact: Joi.string().trim().min(10).max(15).required(),
  bloodGroup: Joi.string()
    .valid('O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-')
    .optional(),
  presentAddress: Joi.string().min(10).max(100).required(),
  permanentAddress: Joi.string().min(10).max(100).required(),
  gurdian: Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().trim().min(3).max(20).required(),
    fatherContact: Joi.string().trim().min(10).max(15).required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string().trim().min(3).max(20).required(),
    motherContact: Joi.string().trim().min(10).max(15).required(),
  }).required(),
  localGuardian: Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().trim().min(3).max(20).required(),
    contactNumber: Joi.string().trim().min(10).max(15).required(),
    address: Joi.string().trim().min(10).max(100).required(),
  }).required(),
  profileImg: Joi.string().uri().optional(),
  isActive: Joi.string().valid('Active', 'blocked').default('Active'),
});

// Function to validate student data
export const validateJoiStudent = (studentData: unknown) => {
  return studentJoiValidationSchema.validate(studentData, {
    abortEarly: false,
  });
};
