import { z } from 'zod'


const organizationSchema = z.object({
    name: z.string().optional()
})
export type OrganizationInterface = z.infer<typeof organizationSchema>