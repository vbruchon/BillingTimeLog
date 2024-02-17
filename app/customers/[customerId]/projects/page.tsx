import {
    Layout,
    LayoutContent,
    LayoutHeader,
    LayoutTitle,
} from '@/components/layout/Layout'
import { getCustomerById } from '../../../admin/dashboard/customers/customers.query'
import { getProjectsAndHoursByCustomerId } from '../../../admin/dashboard/hours/hourEntry.query'
import { ProjectHoursViewer } from './ProjectHoursViewer'

async function CustomerProjectsPage({
    params,
}: {
    params: { customerId: string }
}) {
    const customer = await getCustomerById(params.customerId)
    const projectswithHours = await getProjectsAndHoursByCustomerId(
        customer?.id
    )

    return (
        <Layout>
            <LayoutHeader>
                <LayoutTitle>Hi {customer?.name}</LayoutTitle>
            </LayoutHeader>
            <LayoutContent>
                <ProjectHoursViewer projectswithHours={projectswithHours} />
            </LayoutContent>
        </Layout>
    )
}

export default CustomerProjectsPage
