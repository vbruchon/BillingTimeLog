'use client'
import { cn } from '@/lib/utils'
import { FolderKanban, Home, UserCog, Users } from 'lucide-react'

export const SideBar = () => {
    const links = [
        { name: 'Home', icone: <Home />, href: '/admin/dashboard' },
        {
            name: 'Customers',
            icone: <Users />,
            href: '/admin/dashboard/customers',
        },
        {
            name: 'Projects',
            icone: <FolderKanban />,
            href: '/admin/dashboard/projects',
        },
        {
            name: 'My Account',
            icone: <UserCog />,
            href: '/admin/dashboard/account',
        },
    ]
    const linkActiveStyle = 'bg-primary-foreground ml-4 border-2 border-primary'
    const linkStyle = 'hover:bg-primary-foreground'

    return (
        <div className="mt-4 flex w-1/6 flex-col gap-y-4 rounded-lg bg-gray-800 p-4 text-white">
            {links.map((link) => (
                <a
                    href={link.href}
                    key={link.name}
                    className={cn('flex gap-x-4 rounded-lg p-4 ')}
                >
                    {link.icone}
                    {link.name}
                </a>
            ))}
        </div>
    )
}
