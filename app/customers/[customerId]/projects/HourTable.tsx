import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { HourItem } from './HourItem'
import { hourEntryType } from '../../../admin/dashboard/hours/hourEntry.query'

type HourTableProps = {
    selectedProjectHours: hourEntryType[]
    projectName: string
}

export const HourTable = ({
    selectedProjectHours,
    projectName,
}: HourTableProps) => {
    return (
        <Table className="w-full border-collapse">
            <TableCaption className="my-2 text-center text-lg font-semibold">
                List of Hours realized on {projectName}
            </TableCaption>
            <TableHeader>
                <TableRow className="text-center text-lg">
                    <TableHead>ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Rate</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {selectedProjectHours.map((hour, index) => (
                    <HourItem index={index} hour={hour} key={index} />
                ))}
            </TableBody>
        </Table>
    )
}
