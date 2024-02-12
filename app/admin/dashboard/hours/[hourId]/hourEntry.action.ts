'use server'

import { prisma } from '@/lib/db/prisma'
import { revalidatePath } from 'next/cache'

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
