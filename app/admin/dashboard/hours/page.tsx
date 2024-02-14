import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import Link from 'next/link'
import { HourEntry } from './HourEntry'
import { getHours } from './hourEntry.query'

export default async function HoursPage() {
    const hours = await getHours()

    return (
        <div className="container mx-auto p-8">
            <div className="mb-8 flex items-center justify-between rounded-lg bg-gray-800 p-4">
                <h1 className="text-2xl font-semibold text-white">HoursPage</h1>
                <Link
                    href={'/admin/dashboard/hours/new'}
                    className="bg-blue-500 text-white hover:bg-blue-700"
                >
                    Add Hours
                </Link>
            </div>

            <Table>
                <TableCaption>A list of your hours.</TableCaption>
                <TableHeader>
                    <TableRow className="mx-auto">
                        <TableHead>ID</TableHead>
                        <TableHead>Project Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Rate</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {hours.map((hour, index) => (
                        <HourEntry key={hour.id} hour={hour} index={index} />
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
