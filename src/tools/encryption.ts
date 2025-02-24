import bcrypt from "bcrypt"

export async function encryptData(data: string): Promise<string> {
    return await bcrypt.hash(data, 10)
}

export async function matchPassword(inputPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(inputPassword, hashedPassword)
}