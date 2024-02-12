import { Typography } from '@/components/ui/Typography'
import { Card, CardContent } from '@/components/ui/card'
import { getHourEntryById, getProjects, getProjectsById } from '@/lib/db/query'
import { HourEntryForm } from '../[hourEntryId]/HourEntryForm'

export default async function HourEntryPage() {
    const projects = await getProjects()

    return (
        <>
            <Typography variant={'h1'}>Edit Project</Typography>
            <Card className="mx-auto mt-8 w-2/3">
                <CardContent className="p-4">
                    <HourEntryForm projects={projects} />
                </CardContent>
            </Card>
        </>
    )
}
