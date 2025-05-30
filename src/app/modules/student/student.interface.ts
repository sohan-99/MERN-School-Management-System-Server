// import { Schema, model, connect } from 'mongoose';

export type Gurdian= {
  fatherName: string;
  fatherOccupation: string;
  fatherContact: string;
  motherName: string;
  motherOccupation: string;
  motherContact: string;
}



export type Student = {
  id: string;
  name:{
    firstName: string;
    middleName?: string;
    lastName: string;
  }
  gender: "male" | "female" | "other";
  dateOfBirth: string; 
  contactNumber: string;
  emargencyContact: string;
  bloodGroup?: "O+" | "O-" | "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-";
  presentAddress: string;
  permanentAddress: string;
  gurdian: Gurdian;
  
}