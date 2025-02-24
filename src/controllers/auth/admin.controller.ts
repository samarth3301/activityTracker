import { AdminAuthInterface } from "../../@types/interface";
import APIError from "../../utils/APIError";
import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";

const adminLogin = catchAsync(async (req: Request, res: Response) => {
    const { username, password } = req.body as AdminAuthInterface;
    if (!username || !password) {
        throw new APIError(400, "Missing required fields");
    }
});

export default {
    adminLogin,
};
