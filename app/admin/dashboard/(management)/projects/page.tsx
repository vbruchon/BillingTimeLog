import { getProjects } from './projects.query'
import { ProjectEntry } from './ProjectEntry'
import { TableHead, TableRow } from '@/components/ui/table'
import DisplayDataInTable from '@/components/layout/dashboard/DisplayDataInTable'

const ProjectsPage = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const page = Number(searchParams.page ?? 1)

    const { projects, totalProjects, projectsWithCounts } = await getProjects({
        page,
    })

    return (
        <DisplayDataInTable
            data={projectsWithCounts}
            tableHeaderComponent={ProjectTableHeader}
            entryComponent={ProjectEntry}
            page={page}
            totalPage={Math.ceil((totalProjects ?? 0) / 10) + 1}
            baseUrl="/admin/dashboard/projects"
        />
    )
}

const ProjectTableHeader = () => {
    return (
        <TableRow className="text-lg">
            <TableHead>ID</TableHead>
            <TableHead>Project Name</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead className="text-center">Total Hours</TableHead>
            <TableHead className="text-center">Total Invoice</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
        </TableRow>
    )
}

export default ProjectsPage
