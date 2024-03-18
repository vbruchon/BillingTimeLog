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

function ProjectsLoadingPage() {
    return (
        <Card className="bg-primary-foreground">
            <CardContent>
                <Table>
                    <TableCaption>A list of your Customers.</TableCaption>
                    <TableHeader>
                        <TableRow className="text-lg">
                            <TableHead>ID</TableHead>
                            <TableHead>Project Name</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Total Hours</TableHead>
                            <TableHead>Total Invoice</TableHead>
                            <TableHead className="text-center">
                                Status
                            </TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="text-base">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <TableRow>
                                <TableCell className="w-[5%] font-medium">
                                    <Skeleton className=" h-11 w-6" />
                                </TableCell>
                                <TableCell className=" w-[20%] font-medium">
                                    <Skeleton className="h-9 w-7/12" />
                                </TableCell>
                                <TableCell className="w-[30%] font-medium">
                                    <Skeleton className="h-9 w-9/12" />
                                </TableCell>
                                <TableCell className="w-[15%] font-medium">
                                    <Skeleton className="mx-auto h-6 w-4/12" />
                                </TableCell>
                                <TableCell className="w-[15%] font-medium">
                                    <Skeleton className="mx-auto h-6 w-4/12" />
                                </TableCell>
                                <TableCell className="w-[15%] font-medium">
                                    <Skeleton className="h-6 w-11/12" />
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
    )
}

export default ProjectsLoadingPage
