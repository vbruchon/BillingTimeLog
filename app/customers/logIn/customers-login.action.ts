'use server'

import { CustomerLogInFormSchema } from './customers-login.schema'

export const checkIfEmailIsClientAction = async ({
    email,
}: CustomerLogInFormSchema) => {
    try {
        const customer = await prisma.customer.findUniqueOrThrow({
            where: {
                email: email,
            },
        })

        return customer
    } catch (error) {
        return false
    }
}
