import { TableHead, TableRow } from '@/components/ui/table'
import { CustomerEntry } from './CustomerEntry'
import { getCustomers } from './customers.query'
import ListPage from '@/components/layout/dashboard/ListPage'

const CustomersPage = async () => {
    const customers = await getCustomers()

    return (
        <ListPage
            title="Customers Page"
            data={customers}
            tableHeaderComponent={CustomerTableHeader}
            entryComponent={CustomerEntry}
            newLink="/admin/dashboard/customers/new"
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
