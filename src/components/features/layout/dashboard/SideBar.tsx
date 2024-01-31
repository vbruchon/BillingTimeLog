'use client'
import { cn } from '@/lib/utils'
import { Home, UserCog, Users } from 'lucide-react'
import { useRouter } from 'next/router'

export const SideBar = () => {
    const links = [
        { name: 'Home', icone: <Home />, href: '/dashboard' },
        { name: 'Clients', icone: <Users />, href: '/dashboard/clients' },
        { name: 'My Account', icone: <UserCog />, href: '/dashboard/account' },
    ]
    const linkActiveStyle = 'bg-primary-foreground ml-4 border-2 border-primary'
    const linkStyle = 'hover:bg-primary-foreground'

    return (
        <div className="mt-4 flex w-1/6 flex-col gap-y-4 rounded-lg bg-gray-800 p-4 text-white">
            {links.map((link) => (
                <a
                    href={link.href}
                    className={cn(
                        'flex gap-x-4 rounded-lg p-4 '
                        //pathname === link.href ? linkActiveStyle : linkStyle
                    )}
                >
                    {link.icone}
                    {link.name}
                </a>
            ))}
        </div>
    )
}
