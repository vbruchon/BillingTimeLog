import ListPage from '@/components/layout/dashboard/ListPage'
import { getHours } from './hourEntry.query'
import { HourEntry } from './HourEntry'
import { TableHead, TableRow } from '@/components/ui/table'

const HoursPage = async () => {
    const hours = await getHours()
    hours.forEach((hour) => {
        if (hour.rate) {
            hour.rate = hour.duration * hour.rate
        }
    })

    return (
        <ListPage
            title="Hours Page"
            data={hours}
            tableHeaderComponent={HoursTableHeader}
            entryComponent={HourEntry}
            newLink="/admin/dashboard/hours/new"
        />
    )
}

const HoursTableHeader = () => {
    return (
        <TableRow className="text-lg">
            <TableHead>ID</TableHead>
            <TableHead>Project Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Rate</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
        </TableRow>
    )
}

export default HoursPage
