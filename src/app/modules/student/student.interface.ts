
export type Gurdian= {
  fatherName: string;
  fatherOccupation: string;
  fatherContact: string;
  motherName: string;
  motherOccupation: string;
  motherContact: string;
}
export type userName = {
    firstName: string;
    middleName?: string;
    lastName: string;
  }
export type localGuardian = {
  name: string;
  occupation: string;
  contactNumber: string;
  address: string;
}

export type Student = {
  id: string;
  name: userName;
  gender: "male" | "female" | "other";
  dateOfBirth?: string; 
  email: string;
  contactNumber: string;
  emargencyContact: string;
  bloodGroup?: "O+" | "O-" | "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-";
  presentAddress: string;
  permanentAddress: string;
  gurdian: Gurdian;
  localGuardian: localGuardian;
  profileImg?: string;
  IsActive: "Active" | "blocked" ;
  
}