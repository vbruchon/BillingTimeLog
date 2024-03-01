import { prisma } from '@/lib/db/prisma'
import { getCustomers } from '../customers/customers.query'

export const getHours = async () => {
    const hours = prisma.hourEntry.findMany({
        select: {
            id: true,
            date: true,
            reason: true,
            duration: true,
            rate: true,
            status: true,
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
            status: true,
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
    status: string
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
                    status: true,
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
    status: string
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
            status: true,
            projectId: true,
        },
    })
    return hourEntry
}
export const getCountOfHoursEntry = async () => {
    const customers = await getCustomers()

    const HoursEntries = await Promise.all(
        customers.map(async (customer) => {
            const projects = await prisma.project.findMany({
                where: {
                    customerId: customer.id,
                },
                include: {
                    hours: true,
                },
            })
            return projects
        })
    )

    const totalDuration = HoursEntries.reduce((total, projects) => {
        const projectTotalDuration = projects.reduce(
            (projectTotal, project) => {
                const projectHoursDuration = project.hours.reduce(
                    (hoursTotal, hour) => {
                        return hoursTotal + hour.duration
                    },
                    0
                )

                return projectTotal + projectHoursDuration
            },
            0
        )

        return total + projectTotalDuration
    }, 0)

    return totalDuration
}

export const getCountOfHoursByInvoiceStatus = async (
    status: 'unbilled' | 'billed'
) => {
    const customers = await getCustomers()

    const hoursEntries = await Promise.all(
        customers.map(async (customer) => {
            const projects = await prisma.project.findMany({
                where: {
                    customerId: customer.id,
                },
                include: {
                    hours: {
                        where: {
                            status: status,
                        },
                    },
                },
            })
            return projects
        })
    )

    const totalPaid = hoursEntries.reduce((total, projects) => {
        const projectTotalDuration = projects.reduce(
            (projectTotal, project) => {
                const projectHoursDuration = project.hours.reduce(
                    (hoursTotal, hour) => {
                        return hoursTotal + hour.duration
                    },
                    0
                )

                return projectTotal + projectHoursDuration
            },
            0
        )

        return total + projectTotalDuration
    }, 0)

    return totalPaid
}

export const getAverageDurationByInvoiceStatus = async (
    status: 'unbilled' | 'billed'
) => {
    const customers = await getCustomers()

    const { totalHours, totalProjects } = await customers.reduce(
        async (accumulator, customer) => {
            const { totalHours, totalProjects } = await accumulator

            const projects = await prisma.project.findMany({
                where: {
                    customerId: customer.id,
                },
                include: {
                    hours: {
                        where: {
                            NOT: {
                                status: status,
                            },
                        },
                    },
                },
            })

            const customerTotalHours = projects.reduce(
                (projectTotal, project) => {
                    const projectHoursDuration = project.hours.reduce(
                        (hoursTotal, hour) => hoursTotal + hour.duration,
                        0
                    )

                    return projectTotal + projectHoursDuration
                },
                0
            )

            return {
                totalHours: totalHours + customerTotalHours,
                totalProjects: totalProjects + projects.length,
            }
        },
        Promise.resolve({ totalHours: 0, totalProjects: 0 })
    )

    const averageDuration = totalProjects > 0 ? totalHours / totalProjects : 0

    return averageDuration
}

export const getTotalRevenue = async () => {
    const customers = await getCustomers()

    const totalRevenue = await Promise.all(
        customers.map(async (customer) => {
            const projects = await prisma.project.findMany({
                where: {
                    customerId: customer.id,
                },
                include: {
                    hours: true,
                },
            })

            const customerRevenue = projects.reduce((projectTotal, project) => {
                const projectHoursRevenue = project.hours.reduce(
                    (hoursTotal, hour) => {
                        return hoursTotal + hour.duration * hour.rate
                    },
                    0
                )

                return projectTotal + projectHoursRevenue
            }, 0)

            return customerRevenue
        })
    )

    const totalRevenueSum = totalRevenue.reduce(
        (total, customerRevenue) => total + customerRevenue,
        0
    )

    return totalRevenueSum.toFixed(2)
}

export const getTotalRevenueForCurrentYear = async () => {
    const customers = await getCustomers()
    const currentYear = new Date().getFullYear()

    const totalRevenueForCurrentYear = await Promise.all(
        customers.map(async (customer) => {
            const projects = await prisma.project.findMany({
                where: {
                    customerId: customer.id,
                },
                include: {
                    hours: {
                        where: {
                            createdAt: {
                                gte: new Date(currentYear, 0, 1),
                                lte: new Date(currentYear, 11, 31, 23, 59, 59),
                            },
                        },
                    },
                },
            })

            const customerRevenueForCurrentYear = projects.reduce(
                (projectTotal, project) => {
                    const projectHoursRevenue = project.hours.reduce(
                        (hoursTotal, hour) => {
                            return hoursTotal + hour.duration * hour.rate
                        },
                        0
                    )

                    return projectTotal + projectHoursRevenue
                },
                0
            )

            return customerRevenueForCurrentYear
        })
    )

    const totalRevenueSumForCurrentYear = totalRevenueForCurrentYear.reduce(
        (total, customerRevenue) => total + customerRevenue,
        0
    )

    return totalRevenueSumForCurrentYear.toFixed(2)
}

export const getTotalRevenueForCurrentMonth = async () => {
    const customers = await getCustomers()
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()

    const totalRevenueForCurrentMonth = await Promise.all(
        customers.map(async (customer) => {
            const projects = await prisma.project.findMany({
                where: {
                    customerId: customer.id,
                },
                include: {
                    hours: {
                        where: {
                            createdAt: {
                                gte: new Date(currentYear, currentMonth, 1),
                                lte: new Date(
                                    currentYear,
                                    currentMonth + 1,
                                    0,
                                    23,
                                    59,
                                    59
                                ),
                            },
                        },
                    },
                },
            })

            const customerRevenueForCurrentMonth = projects.reduce(
                (projectTotal, project) => {
                    const projectHoursRevenue = project.hours.reduce(
                        (hoursTotal, hour) => {
                            return hoursTotal + hour.duration * hour.rate
                        },
                        0
                    )

                    return projectTotal + projectHoursRevenue
                },
                0
            )

            return customerRevenueForCurrentMonth
        })
    )

    const totalRevenueSumForCurrentMonth = totalRevenueForCurrentMonth.reduce(
        (total, customerRevenue) => total + customerRevenue,
        0
    )

    return totalRevenueSumForCurrentMonth.toFixed(2)
}
