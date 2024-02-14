import { getRequiredAuthSession } from '../../../../src/lib/auth'
import { prisma } from '../../../../src/lib/db/prisma'

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
