import express, { Request, Response } from 'express'
import cors from 'cors';
const app = express()

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(`Hello World! ${a}`);

})


export default app;