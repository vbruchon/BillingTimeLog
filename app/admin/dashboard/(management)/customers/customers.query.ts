import { getRequiredAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/db/prisma'

type GetCustomersOptions = {
    page?: number
}

export const getCustomers = async ({ page }: GetCustomersOptions = {}) => {
    const session = await getRequiredAuthSession()
    const pageSize = 6

    const totalCustomers = await prisma.customer.count()
    const customers = await prisma.customer.findMany({
        where: {
            userId: session.user.id,
        },
        select: {
            id: true,
            companyName: true,
            email: true,
            logo: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
        take: pageSize,
        skip: Math.max(0, (page ?? 1) - 1 * pageSize),
    })

    return { customers, totalCustomers }
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
