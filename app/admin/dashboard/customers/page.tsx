import { TableHead, TableRow } from '@/components/ui/table'
import { CustomerEntry } from './CustomerEntry'
import { getCustomers } from './customers.query'
import ListPage from '@/components/layout/dashboard/ListPage'

const CustomersPage = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const page = Number(searchParams.page ?? 1)
    const { customers, totalCustomers } = await getCustomers({ page })
    return (
        <ListPage
            title="Customers Page"
            data={customers}
            tableHeaderComponent={CustomerTableHeader}
            entryComponent={CustomerEntry}
            newLink="/admin/dashboard/customers/new"
            page={page}
            totalPage={Math.ceil((totalCustomers ?? 0) / 10) + 1}
            baseUrl="/admin/dashboard/customers"
        />
    )
}

const CustomerTableHeader = () => {
    return (
        <TableRow className="text-lg">
            <TableHead>ID</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Action</TableHead>
        </TableRow>
    )
}

export default CustomersPage
