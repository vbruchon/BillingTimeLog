import { prisma } from '@/lib/db/prisma'

export const getHours = async () => {
    const hours = prisma.hourEntry.findMany({
        select: {
            id: true,
            date: true,
            reason: true,
            duration: true,
            rate: true,
            invoiceStatus: true,
            createdAt: true,
            projectId: true,
            project: {
                select: {
                    name: true,
                },
            },
        },
    })

    return hours
}

export const getHourEntryById = async (hourId: string) => {
    const hourEntry = await prisma.hourEntry.findUniqueOrThrow({
        where: {
            id: hourId,
        },
        select: {
            id: true,
            date: true,
            reason: true,
            duration: true,
            rate: true,
            invoiceStatus: true,
            projectId: true,
        },
    })
    return hourEntry
}

export type hourEntryType = {
    id: string
    date: Date
    reason: string
    duration: number
    rate: number
    invoiceStatus: string
    projectId: string
}

export type ProjectWithHours = {
    project: {
        id: string
        name: string
    }
    hours: hourEntryType[]
}

export const getProjectsAndHoursByCustomerId = async (
    customerId?: string
): Promise<ProjectWithHours[]> => {
    const projects = await prisma.project.findMany({
        where: { customerId: customerId },
    })

    const projectsWithHours: ProjectWithHours[] = []

    await Promise.all(
        projects.map(async (project) => {
            const hours = await prisma.hourEntry.findMany({
                where: {
                    projectId: project.id,
                },
                select: {
                    id: true,
                    date: true,
                    reason: true,
                    duration: true,
                    rate: true,
                    invoiceStatus: true,
                    projectId: true,
                },
            })

            projectsWithHours.push({
                project: {
                    id: project.id,
                    name: project.name,
                },
                hours: hours,
            })
        })
    )

    return projectsWithHours
}

export const getHoursByProjectId = (
    projectsWithHours: ProjectWithHours[],
    projectId: string
): hourEntryType[] | undefined => {
    const selectedProject = projectsWithHours.find(
        (projectWithHours) => projectWithHours.project.id === projectId
    )

    return selectedProject?.hours
}

/* type hourEntryType = {
    id: string
    date: Date
    reason: string
    duration: number
    rate: number
    invoiceStatus: string
    projectId: string
}*/
export const getHoursByCustomerId = async (customerId?: string) => {
    const projects = await prisma.project.findFirst({
        where: { customerId: customerId },
    })

    const hourEntry = await prisma.hourEntry.findMany({
        where: {
            projectId: projects?.id,
        },
        select: {
            id: true,
            date: true,
            reason: true,
            duration: true,
            rate: true,
            invoiceStatus: true,
            projectId: true,
        },
    })
    return hourEntry
}
