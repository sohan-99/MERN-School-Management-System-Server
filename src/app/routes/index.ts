import { Router } from 'express';
import { UserRoute } from '../modules/user/user.route';
import { StudentRoutes } from '../modules/student/student.route';

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
];

moduleRoutes.forEach(route => {
  router.use(route.Path, route.route);
});

export default router;
