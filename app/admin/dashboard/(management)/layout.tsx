import { PropsWithChildren } from 'react'
import { Layout, LayoutContent } from '@/components/layout/Layout'
import { ManagementLayoutHeader } from './ManagementLayoutHeader'

const ManagementLayout = async ({ children }: PropsWithChildren) => {
    return (
        <Layout>
            <ManagementLayoutHeader />
            <LayoutContent>{children}</LayoutContent>
        </Layout>
    )
}

export default ManagementLayout
