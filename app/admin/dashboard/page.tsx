import {
    Layout,
    LayoutContent,
    LayoutHeader,
    LayoutTitle,
} from '@/components/layout/Layout'
import { getRequiredAuthSession } from '@/lib/auth'
import React from 'react'
import { CustomerStats } from './CustomerStats'
import { ProjectStats } from './ProjectsStats'
import { HoursStats } from './HoursStats'
import { RevenueStats } from './RevenueStats'

async function DashboardPage() {
    const session = await getRequiredAuthSession()

    return (
        <Layout>
            <LayoutHeader>
                <LayoutTitle>
                    Welcome in your dashboard, {session.user.name}
                </LayoutTitle>
            </LayoutHeader>
            <LayoutContent className="flex flex-col flex-wrap gap-6">
                <RevenueStats />
                <CustomerStats userId={session.user.id} />
                <ProjectStats />
                <HoursStats />
            </LayoutContent>
        </Layout>
    )
}

export default DashboardPage
