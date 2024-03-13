'use server'

import { prisma } from '@/lib/db/prisma'
import { CustomerLogInFormSchema } from './customers-login.schema'

export const checkIfEmailIsClientAction = async ({
    email,
}: CustomerLogInFormSchema) => {
    const customer = await prisma.customer.findFirst({
        where: {
            email: email,
        },
    })

    return customer
}
