import { z } from 'zod'

//JS
export const CustomerFormSchema = z.object({
    logo: z.string().url(),
    companyName: z.string().min(3).max(200),
    address: z.string().max(300),
    country: z.string().max(200),
    contactName: z.string().max(255),
    contactFirstName: z.string().max(255),
    tel: z.string().min(10).max(13),
    email: z.string().email(),
    SIRET: z.string().min(14).max(14),
    VATNumber: z.string().min(8).max(16).nullable(),
    webSite: z.string().url().nullable(),
})

//TS
export type CustomerFormSchema = z.infer<typeof CustomerFormSchema>
