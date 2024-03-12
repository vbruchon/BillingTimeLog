import { z } from 'zod'

// JS
export const CustomerFormSchema = z.object({
    logo: z.string().url().optional(),
    companyName: z.string().min(3).max(200),
    address: z.string().max(300),
    country: z.string().max(200),
    contactName: z.string().max(255).optional(),
    contactFirstName: z.string().max(255).optional(),
    tel: z.string().max(13).optional(),
    email: z.string().email(),
    SIRET: z.string().max(14).optional(),
    VATNumber: z.optional(z.string().max(16).nullable()),
    webSite: z.string().url().optional(),
})

// TS
export type CustomerFormSchema = z.infer<typeof CustomerFormSchema>
