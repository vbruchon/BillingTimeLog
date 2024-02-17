import { TableCell, TableRow } from '@/components/ui/table'
import { hourEntryType } from '../../../admin/dashboard/hours/hourEntry.query'
import { Badge } from '@/components/ui/badge'

type HourItemProps = {
    hour: hourEntryType
    index: number
}

export const HourItem = ({ hour, index }: HourItemProps) => {
    const statusStyle =
        hour.invoiceStatus === 'Overdue'
            ? 'border-red-600 text-red-600'
            : hour.invoiceStatus === 'Pending'
              ? 'border-orange-600 text-orange-600'
              : 'border-green-600 text-green-600'

    return (
        <TableRow className="text-base">
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{hour.date.toLocaleDateString()}</TableCell>
            <TableCell>{hour.reason}</TableCell>
            <TableCell>{hour.duration}</TableCell>
            <TableCell>{hour.rate}</TableCell>
            <TableCell>{hour.duration * hour.rate}</TableCell>
            <TableCell className="text-center">
                <Badge variant={'outline'} className={`text-sm ${statusStyle}`}>
                    {hour.invoiceStatus}
                </Badge>
            </TableCell>
        </TableRow>
    )
}
