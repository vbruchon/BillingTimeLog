'use server'

import { prisma } from '@/lib/db/prisma'
import { authentifiedAction } from '@/lib/db/safe-action'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { HourEntryFormSchema } from './hourEntry.schema'

export const deleteHourEntry = async (hourEntryId: string) => {
    try {
        await prisma.hourEntry.delete({
            where: {
                id: hourEntryId,
            },
        })
        revalidatePath('/admin//dashboard/hours')
        return { message: 'The hour entry has been succesfully deleted' }
    } catch (error) {
        return { message: error }
    }
}

const HourEntryActionEditProps = z.object({
    hourEntryId: z.string(),
    data: HourEntryFormSchema,
})

export const hourEntryActionEdit = authentifiedAction(
    HourEntryActionEditProps,
    async (props, { userId }) => {
        const updatedHourEntry = await prisma.hourEntry.update({
            where: {
                id: props.hourEntryId,
            },
            data: props.data,
        })
        return { message: 'Customer update successfully !', updatedHourEntry }
    }
)

export const hourEntryActionCreate = authentifiedAction(
    HourEntryFormSchema,
    async (props, { userId }) => {
        const newHourEntry = await prisma.hourEntry.create({
            data: { ...props },
        })
        return { message: 'Customer created successfully!', newHourEntry }
    }
)
