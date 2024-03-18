'use client'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Fragment, useState } from 'react'
import { ProjectWithHours } from '../../../admin/dashboard/(management)/hours/hourEntry.query'
import { ProjectSelector } from './ProjectSelector'
import { HourTable } from './HourTable'
import { Typography } from '@/components/ui/Typography'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

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

    const projectStatus =
        projectswithHours.find((data) => data.project.id === selectedProject)
            ?.project.status || ''

    return (
        <>
            <div className="flex items-center justify-center gap-8">
                <Typography variant={'h2'} className="text-center">
                    Projet {projectName}
                </Typography>
                <Badge
                    variant={'outline'}
                    className={cn(
                        ' border-success text-success w-20 text-center text-sm',
                        {
                            'border-orange-600 text-orange-600':
                                projectStatus === 'in_progress',
                        }
                    )}
                >
                    {projectStatus === 'in_progress' ? 'En cours' : 'Terminé'}
                </Badge>
            </div>
            <div className="mt-8 flex flex-col gap-y-8">
                {projectswithHours.length > 1 && (
                    <ProjectSelector
                        projectswithHours={projectswithHours}
                        onProjectChange={handleChange}
                    />
                )}
                <Card className="bg-card">
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
