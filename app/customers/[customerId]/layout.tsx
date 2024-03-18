import { LinkType, SideBar } from '@/components/layout/dashboard/SideBar'
import { FileText, FolderKanban } from 'lucide-react'
import { PropsWithChildren } from 'react'
import { getCustomerById } from '../../admin/dashboard/(management)/customers/customers.query'

const LayoutCustomerDashboard = async ({
    children,
    params,
}: PropsWithChildren & { params: { customerId: string } }) => {
    const customerLinks: LinkType[] = [
        {
            name: 'Projects',
            icon: <FolderKanban />,
            href: `/customers/${params.customerId}/projects`,
        },
        {
            name: 'Invoices',
            icon: <FileText />,
            href: `/customers/${params.customerId}/invoices`,
        },
    ]
    const customer = await getCustomerById(params.customerId)
    return (
        <div className="mx-3 flex min-h-screen">
            <SideBar links={customerLinks} customer={customer} />
            <div className="mt-4 flex-1 overflow-auto p-4 lg:ml-3">
                {children}
            </div>
        </div>
    )
}

export default LayoutCustomerDashboard
