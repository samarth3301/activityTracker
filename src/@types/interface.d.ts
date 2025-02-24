import { z } from 'zod'


const organizationSchema = z.object({
    name: z.string()
})
export type OrganizationInterface = z.infer<typeof organizationSchema>

const adminAuthSchema = z.object({
    username: z.string(),
    password: z.string()
})
export type AdminAuthInterface = z.infer<typeof adminAuthSchema>

const authSchema = z.object({
    email: z.string(),
    password: z.string()
})
export type AuthInterface = z.infer<typeof authSchema>

export const EmailOptionsSchema = z.object({
    to: z.string().email(),
    subject: z.string(),
    text: z.string().optional(),
    html: z.string().optional(),
});
export type EmailInterface = Zod.infer<typeof EmailOptionsSchema>;