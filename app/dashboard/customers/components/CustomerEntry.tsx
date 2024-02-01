import { Pencil } from 'lucide-react'
import { TableCell, TableRow } from '@/components/ui/table'
import { DeleteButtonWithConfirmation } from '@/components/features/layout/dashboard/button/DeleteButtonWithConfirmation'
import { Typography } from '@/components/ui/Typography'
import Link from 'next/link'

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
                <Typography as={Link} href={`/dashboard/clients/${client.id}`}>
                    <Pencil size={22} />
                </Typography>
                <DeleteButtonWithConfirmation clientId={client.id} />
            </TableCell>
        </TableRow>
    )
}
