import { user } from "@prisma/client";
import { Request } from "express";

declare global {
	namespace Express {
		interface Request {
			user?: user;
		}
	}
}
