'use client'
import { usePathname } from 'next/navigation'
import { AccountFormSchema } from '../../../../app/admin/dashboard/account/account.schema'
import { CustomerFormSchema } from '../../../../app/admin/dashboard/(management)/customers/customers.schema'
import { ThemeToggleButton } from '@/components/theme/ThemeToggleButton'
import { SideBarLink } from './SideBarLink'
import { SideBarHeader } from './SideBarHeader'
import { SideBarUserInfo } from './SideBarUserInfo'

export type LinkType = {
    name: string
    icon: JSX.Element
    href: string
}

export type SideBarProps = {
    links: LinkType[]
    user?: AccountFormSchema
    customer?: CustomerFormSchema
}
export const SideBar = ({ links, user, customer }: SideBarProps) => {
    const pathName = usePathname()

    return (
        <div className="relative my-4 flex w-64 flex-col gap-y-2 rounded-xl p-4 text-foreground">
            <SideBarHeader />
            {user && <SideBarUserInfo user={user} />}
            {customer && <SideBarUserInfo customer={customer} />}

            <div className="w-full">
                {links.map((link) => {
                    const href = link.href.split('/')
                    const path = pathName?.split('/')
                    const isLinkActive = href[3] === path?.[3]

                    if (link.name === 'My Account') {
                        return (
                            <div className="mt-20">
                                <hr
                                    key="hr-my-account"
                                    style={{
                                        borderWidth: '0 0 medium',
                                        borderStyle: 'solid solid none',
                                    }}
                                    className="my-3 h-[0.05rem] border-solid bg-gradient-to-r from-transparent via-muted-foreground to-transparent opacity-65 dark:via-white"
                                />
                                <SideBarLink
                                    href={link.href}
                                    name={link.name}
                                    isLinkActive={isLinkActive}
                                    icon={link.icon}
                                />
                            </div>
                        )
                    }

                    return (
                        <SideBarLink
                            href={link.href}
                            name={link.name}
                            isLinkActive={isLinkActive}
                            icon={link.icon}
                        />
                    )
                })}
            </div>

            <div className="absolute bottom-2 right-0">
                <ThemeToggleButton />
            </div>
        </div>
    )
}
