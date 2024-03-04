'use server'

import { prisma } from '@/lib/db/prisma'
import { authentifiedAction } from '@/lib/db/safe-action'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { ProjectFormSchema } from './project.schema'
import { getProjectsById } from '../projects.query'

export const deleteProject = async (projectId: string) => {
    try {
        await prisma.hourEntry.deleteMany({
            where: {
                projectId: projectId,
            },
        })

        await prisma.project.delete({
            where: {
                id: projectId,
            },
        })
        revalidatePath('/admin/dashboard/projects')
        return { message: 'The project has been succesfully deleted' }
    } catch (error) {
        return { message: error }
    }
}

export const changeProjectStatus = async (projectId: string) => {
    const project = await getProjectsById(projectId)
    if (project) {
        const newStatus =
            project.status === 'in_progress' ? 'completed' : 'in_progress'

        const projectUpdated = await prisma.project.update({
            where: {
                id: projectId,
            },
            data: {
                status: newStatus,
            },
        })
        revalidatePath('/admin/dashboard/projects')
        return projectUpdated
    } else {
        console.log('project not found')
        return { message: 'The project was not found' }
    }
}

const ProjectActionEditProps = z.object({
    projectId: z.string(),
    data: ProjectFormSchema,
})

export const projectActionEdit = authentifiedAction(
    ProjectActionEditProps,
    async (props, { userId }) => {
        const updatedProject = await prisma.project.update({
            where: {
                id: props.projectId,
            },
            data: props.data,
        })
        console.log('updated succesfully')

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
