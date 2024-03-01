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
            companyName: true,
            email: true,
        },
    })

    return customers
}

export const getCustomerById = async (customerId: string) => {
    const customer = await prisma.customer.findUniqueOrThrow({
        where: {
            id: customerId,
        },
        select: {
            id: true,
            logo: true,
            companyName: true,
            address: true,
            country: true,
            contactName: true,
            contactFirstName: true,
            tel: true,
            email: true,
            SIRET: true,
            VATNumber: true,
            webSite: true,
        },
    })

    return customer
}

export const getCountofCustomers = async (userId: string) => {
    return await prisma.customer.count({
        where: {
            userId: userId,
        },
    })
}

export const getCountNewCustomers = async (userId: string) => {
    const currentYear = new Date().getFullYear()
    const previousYear = currentYear - 1

    const currentYearNewCustomers = await prisma.customer.count({
        where: {
            userId: userId,
            AND: [
                {
                    createdAt: {
                        gte: new Date(`${currentYear}-01-01T00:00:00.000Z`),
                        lt: new Date(`${currentYear + 1}-01-01T00:00:00.000Z`),
                    },
                },
            ],
        },
    })

    const previousYearNewCustomers = await prisma.customer.count({
        where: {
            AND: [
                {
                    createdAt: {
                        lt: new Date(`${currentYear}-01-01T00:00:00.000Z`),
                    },
                },
            ],
        },
    })

    const percentageNewCustomers =
        (currentYearNewCustomers / previousYearNewCustomers) * 100
    return [currentYearNewCustomers, percentageNewCustomers]
}
