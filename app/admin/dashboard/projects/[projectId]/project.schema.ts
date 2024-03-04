import { z } from 'zod'

//JS
export const ProjectFormSchema = z.object({
    name: z.string().min(3).max(40),
    customerId: z.string().max(25),
})

//TS
export type ProjectFormSchema = z.infer<typeof ProjectFormSchema>
