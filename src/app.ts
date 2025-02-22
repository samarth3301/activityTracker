import express, { Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import { errorConverter, errorHandler } from "./handlers/error.handler";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

app.get("/", (req: Request, res: Response) => {
	res.status(200).json("Backend is live.");
});

app.use(errorHandler);
app.use(errorConverter);

export default app;
