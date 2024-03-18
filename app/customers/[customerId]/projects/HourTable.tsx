import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { HourItem } from './HourItem'
import { hourEntryType } from '../../../admin/dashboard/(management)/hours/hourEntry.query'

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
            <TableHeader>
                <TableRow className="text-center text-lg">
                    <TableHead className="text-foreground">Date</TableHead>
                    <TableHead className="text-foreground">Motif</TableHead>
                    <TableHead className="text-center text-foreground">
                        Durée
                    </TableHead>
                    <TableHead className="text-center text-foreground">
                        Tarif
                    </TableHead>
                    <TableHead className="text-center text-foreground">
                        Total
                    </TableHead>
                    <TableHead className="text-center text-foreground">
                        Status
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {selectedProjectHours.map((hour, index) => (
                    <HourItem hour={hour} key={index} />
                ))}
            </TableBody>
        </Table>
    )
}
