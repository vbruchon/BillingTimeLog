import { LinkType, SideBar } from '@/components/layout/dashboard/SideBar'
import { getRequiredAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/db/prisma'
import { FolderKanban, Home, Timer, UserCog, Users } from 'lucide-react'
import { PropsWithChildren } from 'react'

const LayoutDashboard = async ({ children }: PropsWithChildren) => {
    const session = await getRequiredAuthSession()
    const user = await prisma.user.findUniqueOrThrow({
        where: { id: session.user.id },
    })
    const links: LinkType[] = [
        { name: 'Home', icon: <Home />, href: '/admin/dashboard' },
        {
            name: 'Customers',
            icon: <Users />,
            href: '/admin/dashboard/customers',
        },
        {
            name: 'Projects',
            icon: <FolderKanban />,
            href: '/admin/dashboard/projects',
        },
        { name: 'Hours', icon: <Timer />, href: '/admin/dashboard/hours' },
        {
            name: 'My Account',
            icon: <UserCog />,
            href: '/admin/dashboard/account',
        },
    ]

    return (
        <div className="flex h-screen">
            <SideBar links={links} user={user} />
            <div className="mx-4 mt-4 flex-1 overflow-auto rounded-lg bg-primary-foreground p-4">
                {children}
            </div>
        </div>
    )
}

export default LayoutDashboard
