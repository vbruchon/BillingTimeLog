import { z } from 'zod'

// JS
export const HourEntryFormSchema = z.object({
    date: z.date(),
    reason: z.string().min(10).max(80),
    duration: z.string().max(7),
    rate: z.string(),
    projectId: z.string(),
})

// TS
export type HourEntryFormSchema = z.infer<typeof HourEntryFormSchema>
