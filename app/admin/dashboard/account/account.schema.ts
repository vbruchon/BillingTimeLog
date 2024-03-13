import { nullable, z } from 'zod'

export const AccountFormSchema = z.object({
    image: z.string().url().nullable(),
    name: z.string().max(255).nullable(),
    email: z.string().email(),
    companyName: z.string().min(3).max(200).nullable(),
    address: z.string().max(300).nullable(),
    zipCode: z.string().max(5).nullable(),
    city: z.string().max(255).nullable(),
    country: z.string().max(20).nullable(),
    tel: z.string().nullable(),
    SIRET: z.string().min(14).max(14).nullable(),
    VATNumber: z.string().min(8).max(16).nullable(),
    activityCode: z.string().min(4).max(12).nullable(),
})

// TS
export type AccountFormSchema = z.infer<typeof AccountFormSchema>
