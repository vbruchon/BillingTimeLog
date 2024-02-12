'use server'

import { prisma } from '@/lib/db/prisma'
import { authentifiedAction } from '@/lib/db/safe-action'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { CustomerFormSchema } from './customers.schema'

export const deleteCustomer = async (customerId: string) => {
    try {
        await prisma.customer.delete({
            where: {
                id: customerId,
            },
        })
        revalidatePath('/dashboard/customers')
        return { message: 'The customer has been succesfully deleted' }
    } catch (error) {
        return { message: error }
    }
}
const CustomerActionEditProps = z.object({
    customerId: z.string(),
    data: CustomerFormSchema,
})

export const customerActionEdit = authentifiedAction(
    CustomerActionEditProps,
    async (props, { userId }) => {
        const updatedCustomer = await prisma.customer.update({
            where: {
                id: props.customerId,
                userId: userId,
            },
            data: props.data,
        })
        return { message: 'Customer update successfully !', updatedCustomer }
    }
)
