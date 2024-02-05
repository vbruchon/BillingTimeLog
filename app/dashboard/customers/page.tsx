import { Button } from '@/components/ui/button'
import { getRequiredAuthSession } from '@/lib/auth'
//import { prisma } from '@/lib/db/prisma'
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { toast } from 'sonner'
import { CustomerEntry } from './CustomerEntry'
import { useMutation } from '@tanstack/react-query'
import { deleteCustomer } from './customers.action'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export { prisma }

export default async function CustomersPage() {
    const session = await getRequiredAuthSession()

    const clients = await prisma.customer.findMany({
        where: {
            userId: session.user.id,
        },
    })
    return (
        <div className="container mx-auto p-8">
            <div className="mb-8 flex items-center justify-between rounded-lg bg-gray-800 p-4">
                <h1 className="text-2xl font-semibold text-white">
                    ClientsPage
                </h1>
                <Button className="bg-blue-500 text-white hover:bg-blue-700">
                    Add Client
                </Button>
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
                    {clients.map((client, index) => (
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
