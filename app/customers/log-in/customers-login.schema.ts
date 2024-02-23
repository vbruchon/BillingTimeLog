import { z } from 'zod'

//JS
export const CustomerLogInFormSchema = z.object({
    email: z.string().email(),
})

//TS
export type CustomerLogInFormSchema = z.infer<typeof CustomerLogInFormSchema>
