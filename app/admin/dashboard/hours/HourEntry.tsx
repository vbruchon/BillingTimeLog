import { Pencil } from 'lucide-react'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import { DeleteButtonWithConfirmation } from '@/components/layout/dashboard/button/DeleteButtonWithConfirmation'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { deleteHourEntry } from './[hourId]/hourEntry.action'

type HourEntryProps = {
    hour: {
        id: string
        date: Date
        reason: string
        duration: number
        rate: number
        invoiceStatus: string
        createdAt: Date
        project: { name: string }
    }
    index: number
}

export const HourEntry = ({ hour, index }: HourEntryProps) => {
    let statusStyle = ''
    switch (hour.invoiceStatus) {
        case 'Overdue':
            statusStyle = 'border-red-600 text-red-600'
            break
        case 'Pending':
            statusStyle = 'border-orange-600 text-orange-600'
            break
        default:
            statusStyle = 'border-green-600 text-green-600'
            break
    }

    return (
        <TableRow>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="text-lg">{hour.project.name}</TableCell>
            <TableCell>{hour.date.toISOString()}</TableCell>
            <TableCell>{hour.rate}</TableCell>
            <TableCell className="text-center">
                <Badge
                    variant={'outline'}
                    className={cn(' text-sm', statusStyle)}
                >
                    {hour.invoiceStatus}
                </Badge>
            </TableCell>
            <TableCell className="flex items-center justify-end gap-x-4">
                <Link href={`/admin/dashboard/hours/${hour.id}`}>
                    <Pencil size={22} />
                </Link>
                <DeleteButtonWithConfirmation
                    id={hour.id}
                    element="hour entry"
                    deleteFunction={deleteHourEntry}
                />
            </TableCell>
        </TableRow>
    )
}
