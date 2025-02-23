import { User } from "@prisma/client";
import jwt from "jsonwebtoken"

export function generateTokens(
    user: User,
    jti: string,
    secretKey: string,
): { accessToken: string; refreshToken: string } {
    const accessToken = jwt.sign({ userId: user.id, jti }, secretKey, {
        expiresIn: "7d",
    });

    const refreshToken = jwt.sign({ userId: user.id, jti }, secretKey, {
        expiresIn: "7d",
    });

    return {
        accessToken,
        refreshToken,
    };
}