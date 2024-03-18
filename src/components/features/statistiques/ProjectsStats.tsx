import { Card } from '@/components/ui/card'
import { CheckCircle2, CircleEllipsis, FolderKanban } from 'lucide-react'
import {
    getCountOfProjects,
    getPercentageCompletedProjects,
    getPercentageInProgressProject,
} from '../../../../app/admin/dashboard/(management)/projects/projects.query'
import { CardStats } from '@/components/features/statistiques/CardStats'

export const ProjectStats = async () => {
    const projectsCount = await getCountOfProjects()
    const percentageInProgressProject = await getPercentageInProgressProject()
    const percentageCompletedProjects = await getPercentageCompletedProjects()

    return (
        <div className="flex flex-wrap items-center gap-4 p-4">
            <CardStats
                icon={<FolderKanban size={32} />}
                value={projectsCount}
                indicator={'Projects'}
            />
            <CardStats
                icon={<CircleEllipsis color="#ff7800" size={32} />}
                value={percentageInProgressProject}
                indicator={'Projects In Progress'}
                percentage={true}
                className="text-[#ff7800]"
            />

            <CardStats
                icon={<CheckCircle2 color="#43b812" size={32} />}
                value={percentageCompletedProjects}
                indicator={'Completed Projects'}
                percentage={true}
                className="text-[#43b812]"
            />
        </div>
    )
}
