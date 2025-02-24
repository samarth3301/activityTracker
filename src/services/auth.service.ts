import { admin } from "@prisma/client";
import jwt from "jsonwebtoken";

export function generateToken(
    admin: admin,
    jti: string,
    secretKey: string,
): { accessToken: string; } {
    const accessToken = jwt.sign({ username: admin.id, jti }, secretKey, {
        expiresIn: "7d",
    });
    return {
        accessToken
    };
}
