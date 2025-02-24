import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { AuthInterface } from "../../@types/interface";
import APIError from "../../utils/APIError";

const registerUser = catchAsync(async (req: Request, res: Response) => {
	const { email, password } = req.body as AuthInterface;
	if (!email || !password) {
		throw new APIError(400, "Email and password are required");
	}
});

export default {
	registerUser
};
