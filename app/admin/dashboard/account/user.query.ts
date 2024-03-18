export const getUser = async (userId: string) => {
    const user = await prisma.user.findUniqueOrThrow({
        where: {
            id: userId,
        },
        select: {
            id: true,
            image: true,
            name: true,
            companyName: true,
            address: true,
            zipCode: true,
            city: true,
            country: true,
            tel: true,
            email: true,
            SIRET: true,
            VATNumber: true,
            activityCode: true,
        },
    })

    return user
}
