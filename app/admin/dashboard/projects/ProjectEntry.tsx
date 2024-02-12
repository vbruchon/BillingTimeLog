import { Pencil } from 'lucide-react'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import { DeleteButtonWithConfirmation } from '@/components/layout/dashboard/button/DeleteButtonWithConfirmation'
import { CustomerEntryProps } from '../customers/CustomerEntry'
import { CustomerFormProps } from '../customers/[customerId]/CustomerForm'

type ProjectEntryProps = {
    project: {
        id: string
        name: string
        customer: {
            name: string
        }
    }
    index: number
}

export const ProjectEntry = ({ project, index }: ProjectEntryProps) => {
    return (
        <TableRow>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="text-lg">{project.name}</TableCell>
            <TableCell>{project.customer.name}</TableCell>
            <TableCell className="flex items-center justify-end gap-x-4">
                <Link href={`/admin/dashboard/projects/${project.id}`}>
                    <Pencil size={22} />
                </Link>
                <DeleteButtonWithConfirmation id={project.id} />
            </TableCell>
        </TableRow>
    )
}
