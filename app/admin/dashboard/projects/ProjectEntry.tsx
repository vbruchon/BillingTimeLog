import { Pencil } from 'lucide-react'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import { DeleteButtonWithConfirmation } from '@/components/layout/dashboard/button/DeleteButtonWithConfirmation'
import { CustomerEntryProps } from '../customers/CustomerEntry'
import { CustomerFormProps } from '../customers/[customerId]/CustomerForm'
import { deleteProject } from './[projectId]/project.action'

type ProjectEntryProps = {
    item: {
        id: string
        name: string
        customer: {
            name: string
        }
    }
    index: number
}

export const ProjectEntry = ({ item, index }: ProjectEntryProps) => {
    return (
        <TableRow>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="text-lg">{item.name}</TableCell>
            <TableCell>{item.customer.name}</TableCell>
            <TableCell className="flex items-center justify-end gap-x-4">
                <Link href={`/admin/dashboard/projects/${item.id}`}>
                    <Pencil size={22} />
                </Link>
                <DeleteButtonWithConfirmation
                    id={item.id}
                    element="project"
                    deleteFunction={deleteProject}
                />
            </TableCell>
        </TableRow>
    )
}
