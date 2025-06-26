import express, { Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoute } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlwares/globalErrorHandler';

const app = express();
// middleware
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoute);
app.get('/', (req: Request, res: Response) => {
  res.send('i am the server of the universe 🌌 running babe');
});

app.use(globalErrorHandler);

export default app;