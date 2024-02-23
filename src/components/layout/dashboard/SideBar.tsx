'use client'
import { cn } from '@/lib/utils'

export type LinkType = {
    name: string
    icon: JSX.Element
    href: string
}

type SideBarProps = {
    links: LinkType[]
}
export const SideBar = ({ links }: SideBarProps) => {
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
                    {link.icon}
                    {link.name}
                </a>
            ))}
        </div>
    )
}
