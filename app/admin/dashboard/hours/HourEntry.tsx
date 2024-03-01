import { Pencil } from 'lucide-react'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import { DeleteButtonWithConfirmation } from '@/components/layout/dashboard/button/DeleteButtonWithConfirmation'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { deleteHourEntry } from './[hourEntryId]/hourEntry.action'

type HourEntryProps = {
    item: {
        id: string
        date: Date
        reason: string
        duration: number
        rate: number
        status: string
        createdAt: Date
        project: { name: string }
    }
    index: number
}

export const HourEntry = ({ item, index }: HourEntryProps) => {
    let statusStyle = ''
    switch (item.status) {
        case 'unbilled':
            statusStyle = 'border-gray-600 text-gray-600'
            break
        case 'billed':
            statusStyle = 'border-green-600 text-green-600'
            break
    }
    const date = `${item.date.getDate().toString().padStart(2, '0')}/
    ${(item.date.getMonth() + 1).toString().padStart(2, '0')}/
    ${item.date.getFullYear()}`

    return (
        <TableRow>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="text-lg">{item.project.name}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell>{item.rate}</TableCell>
            <TableCell className="text-center">
                <Badge
                    variant={'outline'}
                    className={cn(' text-sm', statusStyle)}
                >
                    {item.status}
                </Badge>
            </TableCell>
            <TableCell className="flex items-center justify-end gap-x-4">
                <Link href={`/admin/dashboard/hours/${item.id}`}>
                    <Pencil size={22} />
                </Link>
                <DeleteButtonWithConfirmation
                    id={item.id}
                    element="hour entry"
                    deleteFunction={deleteHourEntry}
                />
            </TableCell>
        </TableRow>
    )
}
