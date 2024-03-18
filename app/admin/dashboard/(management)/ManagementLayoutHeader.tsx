'use client'
import { LayoutHeader, LayoutTitle } from '@/components/layout/Layout'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const ManagementLayoutHeader = () => {
    const pathname = usePathname()
    const [pageTitle, setPageTitle] = useState('')
    const isListPage = pathname?.split('/')?.length === 4

    useEffect(() => {
        const paths = pathname?.split('/')
        if (paths) {
            const page = paths[paths?.length - 1]
            const title = page
                ? page.charAt(0).toUpperCase() + page.slice(1)
                : ''
            setPageTitle(title)
        }
    }, [pathname])
    if (!isListPage) return null
    return (
        <LayoutHeader className="flex-row justify-between">
            <div>
                <LayoutTitle className="text-2xl text-foreground xl:text-4xl">
                    {pageTitle}
                </LayoutTitle>
                <hr
                    style={{
                        borderWidth: '0 0 medium',
                        borderStyle: 'solid solid none',
                    }}
                    className=" h-[0.05rem] border-solid bg-gradient-to-r from-transparent via-muted-foreground to-transparent opacity-65 dark:via-white"
                />
            </div>
            <Link
                href={pathname + '/new'}
                className="flex gap-x-2 rounded-lg bg-primary p-3 font-bold text-white transition-all hover:scale-105"
            >
                <Plus color="white" />
                Add {pageTitle}
            </Link>
        </LayoutHeader>
    )
}
