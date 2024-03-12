import { Typography } from '@/components/ui/Typography'
import { Card, CardContent } from '@/components/ui/card'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'

function CustomersLoadingPage() {
    return (
        <div className="container mx-auto p-8">
            <div className="mb-8 flex items-center justify-between rounded-lg bg-gray-800 p-4">
                <Typography variant={'h1'}>Customers Page</Typography>
                <Skeleton className=" h-14 w-2/12" />
            </div>

            <Card className="bg-primary-foreground">
                <CardContent>
                    <Table>
                        <TableCaption>A list of your Customers.</TableCaption>
                        <TableHeader>
                            <TableRow className="text-lg">
                                <TableHead>Logo</TableHead>
                                <TableHead>Company Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead className="text-right">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="text-base">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <TableRow>
                                    <TableCell className="w-36 font-medium">
                                        <Skeleton className="size-16 rounded-full" />
                                    </TableCell>
                                    <TableCell className="w-auto font-medium">
                                        <Skeleton className="h-9 w-9/12" />
                                    </TableCell>
                                    <TableCell className="w-auto font-medium">
                                        <Skeleton className="h-9 w-9/12" />
                                    </TableCell>
                                    <TableCell className="mr-5 flex items-center justify-end gap-x-4">
                                        <Skeleton className="h-9 w-5" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Skeleton className="mx-auto mt-4 h-9 w-1/4" />
                </CardContent>
            </Card>
        </div>
    )
}

export default CustomersLoadingPage
