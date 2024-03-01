import { Pencil } from 'lucide-react'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import { DeleteButtonWithConfirmation } from '@/components/layout/dashboard/button/DeleteButtonWithConfirmation'
import { deleteProject } from '../projects/[projectId]/project.action'

export type CustomerEntryProps = {
    item: {
        id: string
        companyName: string
        email: string
    }
    index: number
}

export const CustomerEntry = ({ item, index }: CustomerEntryProps) => {
    return (
        <TableRow key={item.companyName}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="text-lg">{item.companyName}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell className="flex items-center justify-end gap-x-4">
                <Link href={`/admin/dashboard/customers/${item.id}`}>
                    <Pencil size={22} />
                </Link>
                <DeleteButtonWithConfirmation
                    id={item.id}
                    element="customer"
                    deleteFunction={deleteProject}
                />
            </TableCell>
        </TableRow>
    )
}
