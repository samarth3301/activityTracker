import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";

const registerUser = catchAsync(async (req: Request, res: Response) => {
    const { } = req.body
})


export default {
    registerUser
}