import express, { Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoute } from './app/modules/user/user.route';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoute);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World      ???');
});

export default app;
