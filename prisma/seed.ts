const { PrismaClient } = require('@prisma/client')

const { faker } = require('@faker-js/faker')
const prisma = new PrismaClient()

const main = async () => {
    const customers: any[] = []

    for (let i = 0; i < 10; i++) {
        customers.push(
            await prisma.customer.create({
                data: {
                    name: faker.company.name(),
                    email: faker.internet.email(),
                    emailVerified: faker.date.past(),
                    userId: 'cls0inxqp000045012dniqq7o',
                },
            })
        )
    }

    console.log('Customer seeded:', customers)
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
