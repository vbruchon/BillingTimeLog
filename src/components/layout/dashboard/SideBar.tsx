'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path'
import { AccountformProps } from '../../../../app/admin/dashboard/account/_components/Account-form'
import { AccountFormSchema } from '../../../../app/admin/dashboard/account/account.schema'
import { CustomerFormSchema } from '../../../../app/admin/dashboard/customers/customers.schema'
import { Typography } from '@/components/ui/Typography'

export type LinkType = {
    name: string
    icon: JSX.Element
    href: string
}

type SideBarProps = {
    links: LinkType[]
    user?: AccountFormSchema
    customer?: CustomerFormSchema
}
export const SideBar = ({ links, user, customer }: SideBarProps) => {
    const pathName = usePathname()

    return (
        <div className="mt-4 flex w-1/6 flex-col gap-y-2 rounded-l-xl bg-gray-800 p-4 text-white">
            <div className="my-6 flex flex-col items-center gap-4">
                <Avatar className="size-32 ">
                    <AvatarFallback>Logo</AvatarFallback>
                    <AvatarImage src={user?.image ?? customer?.logo ?? ''} />
                </Avatar>
                <Typography variant={'large'}>
                    {user?.companyName ?? customer?.companyName}
                </Typography>
            </div>

            {links.map((link) => (
                <Link
                    href={link.href}
                    key={link.name}
                    className={cn(
                        'flex w-full gap-x-4 rounded-l-xl p-4 hover:w-[150%] hover:bg-background',
                        {
                            'ml-8 bg-background text-xl text-blue-600':
                                pathName && link.href === pathName,
                        }
                    )}
                >
                    {link.icon}
                    {link.name}
                </Link>
            ))}
        </div>
    )
}
