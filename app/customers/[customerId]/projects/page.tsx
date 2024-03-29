import {
    Layout,
    LayoutContent,
    LayoutHeader,
    LayoutTitle,
} from '@/components/layout/Layout'
import { getCustomerById } from '../../../admin/dashboard/(management)/customers/customers.query'
import { getProjectsAndHoursByCustomerId } from '../../../admin/dashboard/(management)/hours/hourEntry.query'
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
                <LayoutTitle>
                    Bonjour {customer?.companyName}
                    <span className="ml-4">👋</span>
                </LayoutTitle>
            </LayoutHeader>
            <LayoutContent>
                <ProjectHoursViewer projectswithHours={projectswithHours} />
            </LayoutContent>
        </Layout>
    )
}

export default CustomerProjectsPage
