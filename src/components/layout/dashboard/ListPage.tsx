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

type ListPageProps = {
    title: string
    entryComponent: ComponentType<any>
    tableHeaderComponent: ComponentType<any>
    newLink: string
    data: any[]
    page: number
    totalPage: number
    baseUrl: string
}

const ListPage = ({
    title,
    data,
    tableHeaderComponent,
    entryComponent,
    newLink,
    page,
    totalPage,
    baseUrl,
}: ListPageProps) => {
    const EntryComponent = entryComponent
    const TableHeaderComponent = tableHeaderComponent

    return (
        <div className="container mx-auto p-8">
            <div className="mb-8 flex items-center justify-between rounded-lg bg-gray-800 p-4">
                <Typography variant={'h1'}>{title}</Typography>
                <Link
                    href={newLink}
                    className="flex gap-x-2 rounded-lg bg-blue-500 p-3 font-bold text-white transition-all hover:scale-110 hover:bg-blue-700"
                >
                    <Plus color="white" />
                    Add {title.replace('Page', '')}
                </Link>
            </div>
            <Card className="bg-primary-foreground">
                <CardContent>
                    <Table>
                        <TableCaption>
                            A list of {title.toLowerCase()}.
                        </TableCaption>
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
        </div>
    )
}

export default ListPage
