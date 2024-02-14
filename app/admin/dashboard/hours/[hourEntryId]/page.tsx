import { Typography } from '@/components/ui/Typography'
import { Card, CardContent } from '@/components/ui/card'
import { HourEntryForm } from './HourEntryForm'
import { getHourEntryById } from '../hourEntry.query'
import { getProjects } from '../../projects/projects.query'

export default async function HourEntryPage({
    params,
}: {
    params: { hourEntryId: string }
}) {
    const hourEntry = await getHourEntryById(params.hourEntryId)
    const projects = await getProjects()

    return (
        <>
            <Typography variant={'h1'}>Edit Project</Typography>
            <Card className="mx-auto mt-8 w-2/3">
                <CardContent className="p-4">
                    <HourEntryForm
                        defaultValue={hourEntry}
                        projects={projects}
                    />
                </CardContent>
            </Card>
        </>
    )
}
