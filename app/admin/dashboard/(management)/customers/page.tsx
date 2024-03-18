import { TableHead, TableRow } from '@/components/ui/table'
import { CustomerEntry } from './CustomerEntry'
import { getCustomers } from './customers.query'
import DisplayDataInTable from '@/components/layout/dashboard/DisplayDataInTable'

const CustomersPage = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const page = Number(searchParams.page ?? 1)
    const { customers, totalCustomers } = await getCustomers({ page })

    return (
        <DisplayDataInTable
            data={customers}
            tableHeaderComponent={CustomerTableHeader}
            entryComponent={CustomerEntry}
            page={page}
            totalPage={Math.ceil((totalCustomers ?? 0) / 6) + 1}
            baseUrl="/admin/dashboard/customers"
        />
    )
}

const CustomerTableHeader = () => {
    return (
        <TableRow className="text-lg">
            <TableHead>Logo</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Action</TableHead>
        </TableRow>
    )
}

export default CustomersPage
