import { useState } from 'react'
import { ProjectWithHours } from '../../../admin/dashboard/hours/hourEntry.query'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

type ProjectSelectorProps = {
    projectswithHours: ProjectWithHours[]
    onProjectChange: (projectId: string) => void
}

export const ProjectSelector = ({
    projectswithHours,
    onProjectChange,
}: ProjectSelectorProps) => {
    const [selectedProject, setSelectedProject] = useState(
        projectswithHours[0].project.id
    )

    const handleChange = (projectId: string) => {
        setSelectedProject(projectId)
        onProjectChange(projectId)
    }

    return (
        <Select onValueChange={(value) => handleChange(value)}>
            <SelectTrigger className="w-[180px] bg-primary-foreground">
                <SelectValue placeholder={projectswithHours[0].project.name} />
            </SelectTrigger>
            <SelectContent>
                {projectswithHours.map((data) => (
                    <SelectItem key={data.project.id} value={data.project.id}>
                        {data.project.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}