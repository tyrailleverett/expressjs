import cors from "cors";
import express, { type Request, type Response } from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: Request, res: Response) => res.sendStatus(404));

export default app;
