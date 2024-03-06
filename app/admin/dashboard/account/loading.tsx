import {
    Layout,
    LayoutContent,
    LayoutHeader,
    LayoutTitle,
} from '@/components/layout/Layout'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Loader } from 'lucide-react'

export default async function AccountLoadingPage() {
    return (
        <Layout>
            <LayoutHeader>
                <LayoutTitle>My Account</LayoutTitle>
            </LayoutHeader>
            <LayoutContent>
                <Card className="m-auto mt-4 w-5/12 p-4">
                    <CardHeader className="flex flex-col items-center gap-4 space-y-0">
                        <Avatar className="mr-4 size-40 rounded">
                            <AvatarFallback>
                                <Loader size={16} />
                            </AvatarFallback>
                        </Avatar>
                        <Skeleton className="mb-2 h-7 w-36" />
                        <Skeleton className="h-7 w-56" />
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <Skeleton className="mb-2 h-5 w-36" />
                        <Skeleton className="h-7 w-40" />
                        <Skeleton className="mb-8 h-14 w-80" />
                        <Skeleton className="h-7 w-full" />
                        <Skeleton className="h-7 w-80" />
                        <Skeleton className="h-7 w-full" />
                    </CardContent>
                    <CardFooter className="mt-6 flex flex-row-reverse">
                        <Skeleton className="h-9 w-28" />
                    </CardFooter>
                </Card>
            </LayoutContent>
        </Layout>
    )
}
