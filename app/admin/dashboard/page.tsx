import {
    Layout,
    LayoutContent,
    LayoutHeader,
    LayoutTitle,
} from '@/components/layout/Layout'
import { getRequiredAuthSession } from '@/lib/auth'
import React from 'react'
import { CustomerStats } from '../../../src/components/features/statistiques/CustomerStats'
import { ProjectStats } from '../../../src/components/features/statistiques/ProjectsStats'
import { HoursStats } from '../../../src/components/features/statistiques/HoursStats'
import { RevenueStats } from '../../../src/components/features/statistiques/RevenueStats'

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
