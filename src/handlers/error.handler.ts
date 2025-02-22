import type { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import APIError from "../utils/APIError";

export const errorConverter: ErrorRequestHandler = (err, req, res, next) => {
	let error = err;
	if (!(error instanceof APIError)) {
		const statusCode: number = 500;
		const message = error.message || statusCode;
		error = new APIError(statusCode, message, false, err.stack);
	}
	next(error);
};

export const errorHandler: ErrorRequestHandler = (err: APIError, req: Request, res: Response, next: NextFunction) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || statusCode;
	const response = {
		code: statusCode,
		message,
		...(process.env.NODE_ENV === "development" && { stack: err.stack }),
	};
	if (process.env.NODE_ENV === "development") {
		console.error(err);
	}
	res.status(statusCode).send(response);
};
