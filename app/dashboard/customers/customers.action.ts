'use server'

import { prisma } from '@/lib/db/prisma'
import { revalidatePath } from 'next/cache'
import { toast } from 'sonner'

export const deleteCustomer = async (clientId: string) => {
    try {
        await prisma.client.delete({
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
