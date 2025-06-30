export type IMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademicSemesterName = 'Autumn' | 'Summer' | 'Fall';
export type IAcademicSemesterCode = '01' | '02' | '03';
export type IAcademicSemester = {
  name: IAcademicSemesterName;
  code: IAcademicSemesterCode;
  year: Date;
  startMonth: IMonths;
  endMonth: IMonths;
};
