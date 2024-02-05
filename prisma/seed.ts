const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker')

const prisma = new PrismaClient()

const generateProjects = async (customerId: string) => {
    const projects = []
    const numberOfProjects = Math.max(1, faker.number.int({ min: 1, max: 3 }))

    for (let i = 0; i < numberOfProjects; i++) {
        const project = await prisma.project.create({
            data: {
                name: faker.lorem.words({ min: 1, max: 3 }),
                customerId: customerId,
            },
        })

        const hourEntries = await generateHourEntries(project.id)
        projects.push({ ...project, hours: hourEntries })
    }

    return projects
}

const generateHourEntries = async (projectId: string) => {
    const hourEntries = []

    for (let i = 0; i < faker.number.int({ min: 2, max: 8 }); i++) {
        const hourEntry = await prisma.hourEntry.create({
            data: {
                projectId: projectId,
                date: faker.date.between({
                    from: '2023-01-01T00:00:00.000Z',
                    to: '2024-02-04T00:00:00.000Z',
                }),
                reason: faker.lorem.text(),
                duration: faker.number.int({ min: 1, max: 5 }),
                rate: faker.number.float({
                    min: 45,
                    max: 500,
                }),
                invoiceStatus: faker.helpers.arrayElement([
                    'Pending',
                    'Paid',
                    'Overdue',
                ]),
            },
        })
        hourEntries.push(hourEntry)
    }

    return hourEntries
}

const main = async () => {
    const customers = []
    const user = await prisma.user.findFirst()

    for (let i = 0; i < 10; i++) {
        const customer = await prisma.customer.create({
            data: {
                name: faker.company.name(),
                email: faker.internet.email(),
                emailVerified: faker.date.past(),
                userId: user.id,
            },
        })

        const projects = await generateProjects(customer.id)
        customers.push({ ...customer, projects: projects })
    }

    console.log('Seed has been successfully:')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
        console.error('Error during seeding:', error)

        await prisma.$disconnect()

        process.exit(1)
    })
