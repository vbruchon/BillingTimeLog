import { prisma } from '@/lib/db/prisma'

export const getHours = async () => {
    const hours = prisma.hourEntry.findMany({
        select: {
            id: true,
            date: true,
            reason: true,
            duration: true,
            rate: true,
            invoiceStatus: true,
            createdAt: true,
            projectId: true,
            project: {
                select: {
                    name: true,
                },
            },
        },
    })

    return hours
}

export const getHourEntryById = async (hourId: string) => {
    const hourEntry = await prisma.hourEntry.findUniqueOrThrow({
        where: {
            id: hourId,
        },
        select: {
            id: true,
            date: true,
            reason: true,
            duration: true,
            rate: true,
            invoiceStatus: true,
            projectId: true,
        },
    })
    return hourEntry
}
