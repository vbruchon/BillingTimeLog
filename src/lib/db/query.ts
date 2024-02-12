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

export const getCustomerById = async (customerId: string) => {
    const customer = await prisma.customer.findUnique({
        where: {
            id: customerId,
        },
        select: {
            id: true,
            name: true,
            email: true,
        },
    })

    return customer
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
export const getProjectsById = async (projectId: string) => {
    const project = await prisma.project.findUniqueOrThrow({
        where: {
            id: projectId,
        },
        select: {
            id: true,
            name: true,
            customerId: true,
        },
    })
    return project
}
