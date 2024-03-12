'use client'

import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Fragment, useState } from 'react'
import { ProjectWithHours } from '../../../admin/dashboard/hours/hourEntry.query'
import { ProjectSelector } from './ProjectSelector'
import { HourTable } from './HourTable'
import { Typography } from '@/components/ui/Typography'

type ProjectHoursViewerProps = {
    projectswithHours: ProjectWithHours[]
}

export const ProjectHoursViewer = ({
    projectswithHours,
}: ProjectHoursViewerProps) => {
    const [selectedProject, setSelectedProject] = useState(
        projectswithHours[0].project.id
    )

    const handleChange = (projectId: string) => {
        setSelectedProject(projectId)
    }

    const selectedProjectHours =
        projectswithHours.find((data) => data.project.id === selectedProject)
            ?.hours || []

    const projectName =
        projectswithHours.find((data) => data.project.id === selectedProject)
            ?.project.name || ''
    return (
        <>
            <Typography variant={'h2'} className="mx-auto max-w-sm text-center">
                Hours of {projectName}
            </Typography>
            <div className="mt-8 flex flex-col gap-y-8">
                <ProjectSelector
                    projectswithHours={projectswithHours}
                    onProjectChange={handleChange}
                />
                <Card className="bg-primary-foreground">
                    <CardContent>
                        <HourTable
                            selectedProjectHours={selectedProjectHours}
                            projectName={projectName}
                        />
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
