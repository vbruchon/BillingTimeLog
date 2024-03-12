import { prisma } from '@/lib/db/prisma'
import { getCustomers } from '../customers/customers.query'
import { ProjectStatus } from '@prisma/client'
import { pages } from 'next/dist/build/templates/app-page'

type GetProjectsOptions = {
    page?: number
}

export const getProjects = async ({ page }: GetProjectsOptions = {}) => {
    const pageSize = 10

    const totalProjects = await prisma.project.count()

    const projects = await prisma.project.findMany({
        select: {
            id: true,
            name: true,
            customer: {
                select: {
                    companyName: true,
                },
            },
            status: true,
            hours: {
                select: {
                    id: true,
                },
            },
            Invoice: {
                select: {
                    id: true,
                },
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
        take: pageSize,
        skip: Math.max(0, (page ?? 1) - 1 * pageSize),
    })

    const projectsWithCounts = projects.map((project) => ({
        ...project,
        totalHours: project.hours.length,
        totalInvoices: project.Invoice.length,
    }))

    return { projectsWithCounts, totalProjects, projects }
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
            status: true,
        },
    })
    return project
}
export const getCountOfProjects = async () => {
    const { customers } = await getCustomers()

    const projectCounts = await Promise.all(
        customers.map(async (customer) => {
            const newCount = await prisma.project.count({
                where: {
                    customerId: customer.id,
                },
            })
            return newCount
        })
    )

    const count = projectCounts.reduce(
        (total, currentCount) => total + currentCount,
        0
    )

    return count
}

export const getPercentageInProgressProject = async () => {
    const totalProject = await getCountOfProjects()
    const { customers } = await getCustomers()

    const projectInprogressCounts = await Promise.all(
        customers.map(async (customer) => {
            const newCount = await prisma.project.count({
                where: {
                    customerId: customer.id,
                    status: ProjectStatus.in_progress,
                },
            })
            return newCount
        })
    )

    const count = projectInprogressCounts.reduce(
        (total, currentCount) => total + currentCount,
        0
    )

    return (count / totalProject) * 100
}

export const getPercentageCompletedProjects = async () => {
    const totalProject = await getCountOfProjects()
    const { customers } = await getCustomers()

    const projectInprogressCounts = await Promise.all(
        customers.map(async (customer) => {
            const newCount = await prisma.project.count({
                where: {
                    customerId: customer.id,
                    status: ProjectStatus.completed,
                },
            })
            return newCount
        })
    )

    const count = projectInprogressCounts.reduce(
        (total, currentCount) => total + currentCount,
        0
    )

    return (count / totalProject) * 100
}
