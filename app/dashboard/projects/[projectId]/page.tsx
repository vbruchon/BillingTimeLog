import { Typography } from '@/components/ui/Typography'
import { Card, CardContent } from '@/components/ui/card'
import { prisma } from '@/lib/db/prisma'
import { ProjectForm } from './ProjectForm'
import { getCustomers, getProjectsById } from '@/lib/db/query'

export default async function ProjectPage({
    params,
}: {
    params: { projectId: string }
}) {
    const project = await getProjectsById(params.projectId)
    const customers = await getCustomers()
    const projectCustomer = customers.find(
        (customer) => customer.id === project.customerId
    )
    const customersExceptProjectCustomer = customers.filter(
        (customer) => customer.id !== project.customerId
    )

    return (
        <>
            <Typography variant={'h1'}>Edit Customer</Typography>
            <Card className="mx-auto mt-8 w-2/3">
                <CardContent className="p-4">
                    <ProjectForm
                        defaultValue={project}
                        projectId={params.projectId}
                        otherCustomers={customersExceptProjectCustomer}
                        projectCustomer={projectCustomer?.name}
                    />
                </CardContent>
            </Card>
        </>
    )
}
