import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { CustomerEntry } from './CustomerEntry'
import { getCustomers } from '@/lib/db/query'
import Link from 'next/link'

export default async function CustomersPage() {
    const customers = await getCustomers()

    return (
        <div className="container mx-auto p-8">
            <div className="mb-8 flex items-center justify-between rounded-lg bg-gray-800 p-4">
                <h1 className="text-2xl font-semibold text-white">
                    CustomersPage
                </h1>
                <Link
                    href={'/admin/dashboard/customers/new'}
                    className="bg-blue-500 text-white hover:bg-blue-700"
                >
                    Add Client
                </Link>
            </div>

            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {customers.map((client, index) => (
                        <CustomerEntry
                            key={client.id}
                            client={client}
                            index={index}
                        />
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
