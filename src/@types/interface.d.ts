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