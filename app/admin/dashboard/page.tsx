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
import { getUser } from './account/user.query'

async function DashboardPage() {
    const session = await getRequiredAuthSession()
    const user = await getUser(session.user.id)
    return (
        <Layout>
            <LayoutHeader>
                <LayoutTitle>
                    Bonjour {user.companyName}
                    <span className="ml-4">👋</span>
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
