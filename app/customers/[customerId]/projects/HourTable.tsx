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
            <TableCaption className="my-2 text-center text-lg font-semibold text-gray-300">
                List des heures réalisé pour {projectName}
            </TableCaption>
            <TableHeader>
                <TableRow className="text-center text-lg">
                    <TableHead className="text-white">Date</TableHead>
                    <TableHead className="text-white">Motif</TableHead>
                    <TableHead className="text-center text-white">
                        Durée
                    </TableHead>
                    <TableHead className="text-center text-white">
                        Tarif
                    </TableHead>
                    <TableHead className="text-center text-white">
                        Total
                    </TableHead>
                    <TableHead className="text-center text-white">
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
