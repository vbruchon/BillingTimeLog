import { prisma } from '@/lib/db/prisma'

export const getProjects = async () => {
    const projects = prisma.project.findMany({
        select: {
            id: true,
            name: true,
            customer: {
                select: {
                    name: true,
                },
            },
        },
    })

    return projects
}
export const getProjectsById = async (projectId: string) => {
    const project = await prisma.project.findUniqueOrThrow({
        where: {
            id: projectId,
        },
        select: {
            id: true,
            name: true,
            customerId: true,
        },
    })
    return project
}
