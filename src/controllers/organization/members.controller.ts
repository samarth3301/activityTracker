import { user } from "@prisma/client";
import { db } from "../../config/database";
import APIError from "../../utils/APIError";
import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";

const addMember = catchAsync(async (req: Request, res: Response) => {
	const user = req.user as user;
	const { email } = req.body as { email: string };
	if (!email) {
		throw new APIError(404, "Missing required fields");
	}
	try {
		await db.user.findFirst({
			where: {
				id: user.id,
			},
		});
	} catch (error) {
		throw new APIError(500, "Internal server error");
	}
});

const removeMember = catchAsync(async (req: Request, res: Response) => {
	const { email } = req.body as { email: string };
	if (!email) {
		throw new APIError(404, "Missing required fields");
	}
	try {
	} catch (error) {
		throw new APIError(500, "Internal server error");
	}
});

const getMembers = catchAsync(async (req: Request, res: Response) => {
	const user = req.user as user;
	try {
		const members = await db.user.findFirst({
			where: {
				id: user.id,
			},
		});
		res.status(200).json({
			status: "success",
			data: members,
		});
	} catch (error) {
		throw new APIError(500, "Internal server error");
	}
});

export default {
	addMember,
	removeMember,
	getMembers,
};
