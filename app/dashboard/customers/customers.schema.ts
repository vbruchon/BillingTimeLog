import { z } from 'zod'

//JS
export const CustomerFormSchema = z.object({
    id: z.string(),
    name: z.string().min(3).max(40),
    email: z.string().email(),
})

//TS
export type CustomerFormSchema = z.infer<typeof CustomerFormSchema>
