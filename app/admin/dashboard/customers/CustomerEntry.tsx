import { Pencil } from 'lucide-react'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import { DeleteButtonWithConfirmation } from '@/components/layout/dashboard/button/DeleteButtonWithConfirmation'

export type CustomerEntryProps = {
    client: {
        id: string
        name: string
        email: string
    }
    index: number
}

export const CustomerEntry = ({ client, index }: CustomerEntryProps) => {
    return (
        <TableRow key={client.name}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="text-lg">{client.name}</TableCell>
            <TableCell>{client.email}</TableCell>
            <TableCell className="flex items-center justify-end gap-x-4">
                <Link href={`/admin/dashboard/customers/${client.id}`}>
                    <Pencil size={22} />
                </Link>
                <DeleteButtonWithConfirmation id={client.id} />
            </TableCell>
        </TableRow>
    )
}