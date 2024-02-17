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
/* type ProjectHoursViewerProps = {
    projectswithHours: ProjectWithHours[]
}

export const ProjectHoursViewer = ({
    projectswithHours,
}: ProjectHoursViewerProps) => {
    console.log(projectswithHours)

    const [selectedProject, setSelectedProject] = useState(
        projectswithHours[0].project.id
    )
    const handleChange = (projectId: string) => {
        setSelectedProject(projectId)
    }

    const selectedProjectHours =
        projectswithHours.find((data) => data.project.id === selectedProject)
            ?.hours || []
    console.log(selectedProjectHours)

    return (
        <>
            <select
                name="projects"
                onChange={(e) => handleChange(e.target.value)}
            >
                {projectswithHours.map((data) => (
                    <option key={data.project.id} value={data.project.id}>
                        {data.project.name}
                    </option>
                ))}
            </select>
            <Card className="mt-8">
                <CardContent>
                    <CardTitle>
                        <Table>
                            <TableCaption>A list of your hours.</TableCaption>
                            <TableHeader>
                                <TableRow className="mx-auto">
                                    <TableHead>ID</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Duration</TableHead>
                                    <TableHead>Rate</TableHead>
                                    <TableHead>Total</TableHead>
                                    <TableHead className="text-center">
                                        Status
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {selectedProjectHours.map((hour, index) => (
                                    <Hours index={index} hour={hour} />
                                ))}
                            </TableBody>
                        </Table>
                    </CardTitle>
                </CardContent>
            </Card>
        </>
    )
}
 */
