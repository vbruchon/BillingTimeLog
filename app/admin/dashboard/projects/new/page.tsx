import { Typography } from '@/components/ui/Typography'
import { Card, CardContent } from '@/components/ui/card'
import { prisma } from '@/lib/db/prisma'
import { getCustomers, getProjectsById } from '@/lib/db/query'
import { ProjectForm } from '../[projectId]/ProjectForm'

export default async function CreateProjectPage() {
    const customers = await getCustomers()

    return (
        <>
            <Typography variant={'h1'}>Create Project</Typography>
            <Card className="mx-auto mt-8 w-2/3">
                <CardContent className="p-4">
                    <ProjectForm customers={customers} />
                </CardContent>
            </Card>
        </>
    )
}
