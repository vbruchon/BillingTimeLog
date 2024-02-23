import { LinkType, SideBar } from '@/components/layout/dashboard/SideBar'
import { FileText, FolderKanban } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { PropsWithChildren } from 'react'

type LayoutCustomerDashboardType = {
    children: PropsWithChildren
    params: { customerId: string }
}

const LayoutCustomerDashboard = ({
    children,
    params,
}: PropsWithChildren & { params: { customerId: string } }) => {
    const customerLinks: LinkType[] = [
        {
            name: 'Projects',
            icon: <FolderKanban />,
            href: `/customer/${params.customerId}/projects`,
        },
        {
            name: 'Invoices',
            icon: <FileText />,
            href: `/customers/${params.customerId}/invoices`,
        },
    ]
    return (
        <div className="flex h-screen">
            <SideBar links={customerLinks} />
            <div className="mx-4 mt-4 flex-1 overflow-auto rounded-lg bg-primary-foreground p-4">
                {children}
            </div>
        </div>
    )
}

export default LayoutCustomerDashboard
