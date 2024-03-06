import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/db/prisma'
import { Accountform } from './_components/Account-form'
import {
    Layout,
    LayoutContent,
    LayoutHeader,
    LayoutTitle,
} from '@/components/layout/Layout'

export default async function AccountPage() {
    const session = await getAuthSession()

    if (!session?.user) {
        throw new Error('You need to be logged to view this page')
    }
    const user = await prisma.user.findUniqueOrThrow({
        where: {
            id: session.user.id,
        },
    })

    return (
        <Layout>
            <LayoutHeader>
                <LayoutTitle>My Account</LayoutTitle>
            </LayoutHeader>
            <LayoutContent>
                <Accountform user={user} />
            </LayoutContent>
        </Layout>
    )
}
