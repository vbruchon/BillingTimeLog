import { Pencil } from 'lucide-react'
import { TableCell, TableRow } from '@/components/ui/table'
import { Typography } from '@/components/ui/Typography'
import Link from 'next/link'
import { DeleteButtonWithConfirmation } from '@/components/layout/dashboard/button/DeleteButtonWithConfirmation'

type CustomerEntryProps = {
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
            <TableCell className="font-medium">{index}</TableCell>
            <TableCell className="text-lg">{client.name}</TableCell>
            <TableCell>{client.email}</TableCell>
            <TableCell className="flex items-center justify-end gap-x-4">
                <Link href={`/dashboard/customers/${client.id}`}>
                    <Pencil size={22} />
                </Link>
                <DeleteButtonWithConfirmation clientId={client.id} />
            </TableCell>
        </TableRow>
    )
}
