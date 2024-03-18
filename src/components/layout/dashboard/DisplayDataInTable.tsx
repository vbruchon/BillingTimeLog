import { Typography } from '@/components/ui/Typography'
import {
    Table,
    TableBody,
    TableCaption,
    TableHeader,
} from '@/components/ui/table'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { ComponentType } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { CustomPagination } from '@/components/features/pagination/CustomPagination'

type DisplayDataInTableProps = {
    entryComponent: ComponentType<any>
    tableHeaderComponent: ComponentType<any>
    data: any[]
    page: number
    totalPage: number
    baseUrl: string
}

const DisplayDataInTable = ({
    data,
    tableHeaderComponent,
    entryComponent,
    page,
    totalPage,
    baseUrl,
}: DisplayDataInTableProps) => {
    const EntryComponent = entryComponent
    const TableHeaderComponent = tableHeaderComponent

    return (
        <Card className="bg-card p-2">
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableHeaderComponent />
                    </TableHeader>
                    <TableBody className="text-base">
                        {data.map((item, index) => (
                            <EntryComponent
                                key={item.id}
                                item={item}
                                index={index}
                            />
                        ))}
                    </TableBody>
                </Table>
                {totalPage > 1 && (
                    <CustomPagination
                        page={page}
                        totalPage={totalPage}
                        baseUrl={baseUrl}
                    />
                )}
            </CardContent>
        </Card>
    )
}

export default DisplayDataInTable
