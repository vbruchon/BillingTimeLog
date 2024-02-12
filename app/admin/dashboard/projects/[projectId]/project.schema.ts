import { z } from 'zod'

//JS
export const ProjectFormSchema = z.object({
    id: z.string(),
    name: z.string().min(3).max(40),
    customerId: z.string(),
})

//TS
export type ProjectFormSchema = z.infer<typeof ProjectFormSchema>
