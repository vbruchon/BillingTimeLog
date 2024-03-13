import { z } from 'zod'

// JS
export const CustomerFormSchema = z.object({
    logo: z.string().url().nullable(),
    companyName: z.string().min(3).max(200),
    address: z.string().max(300),
    country: z.string().max(200),
    contactName: z.string().max(255).nullable(),
    contactFirstName: z.string().max(255).nullable(),
    tel: z.string().max(13).nullable(),
    email: z.string().email(),
    SIRET: z.string().max(14).nullable(),
    VATNumber: z.string().max(16).nullable(),
    webSite: z.string().url().nullable(),
})

// TS
export type CustomerFormSchema = z.infer<typeof CustomerFormSchema>
