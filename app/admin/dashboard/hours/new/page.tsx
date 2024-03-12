import { Typography } from '@/components/ui/Typography'
import { Card, CardContent } from '@/components/ui/card'
import { HourEntryForm } from '../[hourEntryId]/HourEntryForm'
import { getProjects } from '../../projects/projects.query'

export default async function HourEntryPage() {
    const { projects } = await getProjects()

    return (
        <>
            <Typography variant={'h1'}>Create a new Hour</Typography>
            <Card className="mx-auto mt-8 w-2/3">
                <CardContent className="p-4">
                    <HourEntryForm projects={projects} />
                </CardContent>
            </Card>
        </>
    )
}
