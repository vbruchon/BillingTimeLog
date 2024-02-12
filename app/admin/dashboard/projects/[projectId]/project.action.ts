'use server'

import { prisma } from '@/lib/db/prisma'
import { authentifiedAction } from '@/lib/db/safe-action'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { ProjectFormSchema } from './project.schema'

export const deleteCustomer = async (customerId: string) => {
    try {
        await prisma.customer.delete({
            where: {
                id: customerId,
            },
        })
        revalidatePath('/admin/dashboard/customers')
        return { message: 'The customer has been succesfully deleted' }
    } catch (error) {
        return { message: error }
    }
}

const CustomerActionEditProps = z.object({
    projectId: z.string(),
    data: ProjectFormSchema,
})

export const projectActionEdit = authentifiedAction(
    CustomerActionEditProps,
    async (props, { userId }) => {
        const updatedProject = await prisma.project.update({
            where: {
                id: props.projectId,
            },
            data: props.data,
        })
        return { message: 'Project update successfully !', updatedProject }
    }
)

export const projectActionCreate = authentifiedAction(
    ProjectFormSchema,
    async (props) => {
        const newProject = await prisma.project.create({
            data: { ...props },
        })
        return { message: 'Project created successfully!', newProject }
    }
)
