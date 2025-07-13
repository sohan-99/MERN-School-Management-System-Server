import { Router } from 'express';
import { UserRoute } from '../modules/user/user.route';
import { StudentRoutes } from '../modules/student/student.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';

const router = Router();

const moduleRoutes = [
  {
    Path: '/users',
    route: UserRoute,
  },
  {
    Path: '/students',
    route: StudentRoutes,
  },
  {
    Path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    Path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.Path, route.route);
});

export default router;
