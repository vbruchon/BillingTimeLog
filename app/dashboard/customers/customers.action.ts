'use server'

import { prisma } from '@/lib/db/prisma'
import { authentifiedAction } from '@/lib/db/safe-action'
import { revalidatePath } from 'next/cache'
import { toast } from 'sonner'
import { z } from 'zod'
import { CustomerFormSchema } from './customers.schema'
import { redirect } from 'next/navigation'

export const deleteCustomer = async (clientId: string) => {
    try {
        await prisma.customer.delete({
            where: {
                id: clientId,
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

/* 
export const customerActionEdit = authentifiedAction(
    CustomerActionEditProps,
    async (props, { userId }) => {
        try {
            const { id, ...rest } = props.data

            const result = await prisma.customer.update({
                where: {
                    id: id,
                },
                data: rest,
            })

            if (result) {
                return { message: 'customer update successful', result }
            } else {
                throw new Error('Failed to update customer')
            }
        } catch (error) {
            console.error('Error updating customer:', error)
            throw new Error('Something went wrong')
        }
    }
)

*/
