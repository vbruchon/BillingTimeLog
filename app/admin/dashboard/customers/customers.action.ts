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
        revalidatePath('/admin//dashboard/customers')
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

const CustomerActionCreateProps = z.object({
    data: CustomerFormSchema,
})

export const customerActionCreate = authentifiedAction(
    CustomerFormSchema,
    async (props, { userId }) => {
        const newCustomer = await prisma.customer.create({
            data: {
                ...props,
                user: {
                    connect: { id: userId },
                },
            },
        })
        return { message: 'Customer created successfully!', newCustomer }
    }
)
