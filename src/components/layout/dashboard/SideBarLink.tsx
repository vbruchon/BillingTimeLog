import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ReactNode } from 'react'

export type SideBarLinkProps = {
    href: string
    name: string
    isLinkActive: boolean
    icon: ReactNode
}

export const SideBarLink = ({
    href,
    name,
    isLinkActive,
    icon,
}: SideBarLinkProps) => {
    return (
        <Link href={href} key={name}>
            <div
                className={cn(
                    'my-1 flex items-center gap-3 rounded-xl px-6 py-3 font-medium text-foreground hover:bg-muted hover:shadow-md',
                    {
                        'bg-muted shadow-md dark:shadow-muted-foreground':
                            isLinkActive,
                    }
                )}
            >
                <span
                    className={cn('rounded-xl bg-muted p-2 text-primary', {
                        'bg-primary text-white dark:text-foreground':
                            isLinkActive,
                    })}
                >
                    {icon}
                </span>
                {name}
            </div>
        </Link>
    )
}
