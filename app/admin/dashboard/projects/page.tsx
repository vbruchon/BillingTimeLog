import ListPage from '@/components/layout/dashboard/ListPage'
import { getProjects } from './projects.query'
import { ProjectEntry } from './ProjectEntry'
import { TableHead, TableRow } from '@/components/ui/table'
import { Table } from 'lucide-react'

const ProjectsPage = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const page = Number(searchParams.page ?? 1)

    const { projects, totalProjects } = await getProjects({ page })
    return (
        <ListPage
            title="Projects Page"
            data={projects}
            tableHeaderComponent={ProjectTableHeader}
            entryComponent={ProjectEntry}
            newLink="/admin/dashboard/projects/new"
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
