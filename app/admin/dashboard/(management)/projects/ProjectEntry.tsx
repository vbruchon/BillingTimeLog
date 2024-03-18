'use client'
import { TableCell, TableRow } from '@/components/ui/table'
import {
    changeProjectStatus,
    deleteProject,
} from './[projectId]/project.action'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ActionButton } from '@/components/layout/dashboard/button/ActionButton'

type ProjectEntryProps = {
    item: {
        id: string
        name: string
        customer: {
            companyName: string
        }
        status: string
        totalHours: number
        totalInvoices: number
    }
    index: number
}

export const ProjectEntry = ({ item, index }: ProjectEntryProps) => {
    let statusStyle = ''
    switch (item.status) {
        case 'in_progress':
            statusStyle = 'border-orange-600 text-orange-600'
            break
        case 'completed':
            statusStyle = 'border-green-600 text-green-600'
            break
    }
    const status = item.status === 'in_progress' ? 'in progress' : 'completed'

    return (
        <TableRow>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="text-lg">{item.name}</TableCell>
            <TableCell>{item.customer.companyName}</TableCell>
            <TableCell className="text-center">{item.totalHours}</TableCell>
            <TableCell className="text-center">{item.totalInvoices}</TableCell>
            <TableCell className="text-center">
                <Badge
                    variant={'outline'}
                    className={cn(' text-sm', statusStyle)}
                >
                    {status}
                </Badge>
            </TableCell>
            <TableCell className="flex items-center justify-end gap-x-4">
                <ActionButton
                    id={item.id}
                    element="project"
                    status={item.status}
                    editLink={`/admin/dashboard/projects/${item.id}`}
                    deleteItem={deleteProject}
                    changeStatus={changeProjectStatus}
                />
            </TableCell>
        </TableRow>
    )
}
