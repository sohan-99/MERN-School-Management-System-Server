import express, { Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlwares/globalErrorHandler';
import notFoundHandler from './app/middlwares/notFound';
import router from './app/routes';

const app = express();
// middleware
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);
app.get('/', (req: Request, res: Response) => {
  res.send('i am the server of the universe 🌌 running babe');
});

app.use(globalErrorHandler);
app.use(notFoundHandler);

export default app;
