import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { ProjectEntry } from './ProjectEntry'
import { getProjects } from '@/lib/db/query'
import Link from 'next/link'

export default async function ProjectsPage() {
    const projects = await getProjects()
    console.log({ projects })

    return (
        <div className="container mx-auto p-8">
            <div className="mb-8 flex items-center justify-between rounded-lg bg-gray-800 p-4">
                <h1 className="text-2xl font-semibold text-white">
                    ProjectsPage
                </h1>
                <Link
                    href={'/admin/dashboard/projects/new'}
                    className="bg-blue-500 text-white hover:bg-blue-700"
                >
                    Add Project
                </Link>
            </div>

            <Table>
                <TableCaption>A list of your project.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Project Name</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {projects.map((project, index) => (
                        <ProjectEntry
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
