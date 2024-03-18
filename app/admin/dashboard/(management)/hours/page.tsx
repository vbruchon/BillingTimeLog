import { getHours } from './hourEntry.query'
import { HourEntry } from './HourEntry'
import { TableHead, TableRow } from '@/components/ui/table'
import DisplayDataInTable from '@/components/layout/dashboard/DisplayDataInTable'

const HoursPage = async ({
    searchParams,
}: {
    params: { courseId: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const page = Number(searchParams.page ?? 1)
    const { hours, totalHours } = await getHours({ page })
    hours.forEach((hour) => {
        if (hour.rate) {
            hour.rate = hour.duration * hour.rate
        }
    })

    return (
        <DisplayDataInTable
            data={hours}
            tableHeaderComponent={HoursTableHeader}
            entryComponent={HourEntry}
            page={page}
            totalPage={Math.ceil((totalHours ?? 0) / 10) + 1}
            baseUrl="/admin/dashboard/hours"
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
