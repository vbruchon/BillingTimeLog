import { TableCell, TableRow } from '@/components/ui/table'
import { hourEntryType } from '../../../admin/dashboard/hours/hourEntry.query'
import { Badge } from '@/components/ui/badge'

type HourItemProps = {
    hour: hourEntryType
}

export const HourItem = ({ hour }: HourItemProps) => {
    const statusStyle =
        hour.status === 'unbilled'
            ? 'border-gray-400 text-gray-300'
            : 'border-green-600 text-green-600'
    const amount = hour.duration * hour.rate

    function formatDate(date: string) {
        const newDate = new Date(date)
        const day = newDate.getDate()
        const month = newDate.toLocaleString('default', { month: 'short' })
        const year = newDate.getFullYear()

        return `${day} ${month} ${year}`
    }

    return (
        <TableRow className="text-base text-white">
            <TableCell>{formatDate(hour.date.toDateString())}</TableCell>
            <TableCell>{hour.reason}</TableCell>
            <TableCell className="text-center">{hour.duration}</TableCell>
            <TableCell className="text-center">
                {hour.rate.toFixed(2)}
            </TableCell>
            <TableCell className="text-center">{amount.toFixed(2)}</TableCell>
            <TableCell className="text-center">
                <Badge
                    variant={'outline'}
                    className={` border-2 text-sm ${statusStyle}`}
                >
                    {hour.status === 'unbilled' ? 'Non facturé' : 'Facturé'}
                </Badge>
            </TableCell>
        </TableRow>
    )
}
