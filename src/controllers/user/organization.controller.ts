import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { OrganizationInterface } from "../../@types/interface";
import { db } from "../../config/database";
import APIError from "../../utils/APIError";
import { user } from "@prisma/client";

const createOrganization = catchAsync(async (req: Request, res: Response) => {
	const user = req.user as user;
	const { name } = req.body as OrganizationInterface;
	try {
		const organization = await db.user.update({
			where: {
				id: user.id,
			},
			data: {
				organization: {
					update: {
						name: name,
					},
				},
			},
		});
		res.status(200).json({
			status: "success",
			message: "Organization created successfully",
			data: organization,
		});
		return;
	} catch (error) {
		throw new APIError(500, "Internal Server Error");
	}
});

const deleteOrganization = catchAsync(async (req: Request, res: Response) => {
	const user = req.user as user;
	try {
		const organization = await db.user.update({
			where: {
				id: user.id,
			},
			data: {
				organization: {
					delete: true,
				},
			},
		});
		res.status(200).json({
			status: "success",
			message: "Organization deleted successfully",
			data: organization,
		});
		return;
	} catch (error) {
		throw new APIError(500, "Internal Server Error");
	}
});

export default {
	createOrganization,
	deleteOrganization,
};
