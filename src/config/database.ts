import { PrismaClient } from "@prisma/client";
import logger from "./logger";

interface CustomNodeJsGlobal extends Global {
	prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

export const db = global.prisma || new PrismaClient({});

db.$connect()
	.then(() => {
		logger.info("🛢️: [ PRISMA ] connected to database");
	})
	.catch((error: string) => {
		logger.error("🛢️: [ PRISMA ] failed to connect datatabase : ", error);
	});
