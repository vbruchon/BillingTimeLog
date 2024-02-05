import { revalidatePath } from 'next/cache'
import { getRequiredAuthSession } from '../auth'
import { prisma } from './prisma'

export const getCustomers = async () => {
    const session = await getRequiredAuthSession()
    const customers = await prisma.customer.findMany({
        where: {
            userId: session.user.id,
        },
        select: {
            id: true,
            name: true,
            email: true,
        },
    })

    return customers
}

export const getProjects = async () => {
    const projects = prisma.project.findMany({
        select: {
            id: true,
            name: true,
            customer: {
                select: {
                    name: true,
                },
            },
        },
    })

    return projects
}
