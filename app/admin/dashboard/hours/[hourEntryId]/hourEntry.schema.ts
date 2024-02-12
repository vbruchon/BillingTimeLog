import { z } from 'zod'

// JS
export const HourEntryFormSchema = z.object({
    date: z.date(),
    reason: z.string().min(10).max(80),
    duration: z.number().max(7),
    rate: z.number(),
    invoiceStatus: z.string().min(4).max(8),
    projectId: z.string(),
})

// TS
export type HourEntryFormSchema = z.infer<typeof HourEntryFormSchema>
