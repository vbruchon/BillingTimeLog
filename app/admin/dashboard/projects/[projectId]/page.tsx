import { Typography } from '@/components/ui/Typography'
import { Card, CardContent } from '@/components/ui/card'
import { prisma } from '@/lib/db/prisma'
import { ProjectForm } from './ProjectForm'
import { getProjectsById } from '../projects.query'
import { getCustomers } from '../../customers/customers.query'

export default async function ProjectPage({
    params,
}: {
    params: { projectId: string }
}) {
    const project = await getProjectsById(params.projectId)
    const customers = await getCustomers()

    return (
        <>
            <Typography variant={'h1'}>Edit Project</Typography>
            <Card className="mx-auto mt-8 w-2/3">
                <CardContent className="p-4">
                    <ProjectForm defaultValue={project} customers={customers} />
                </CardContent>
            </Card>
        </>
    )
}
