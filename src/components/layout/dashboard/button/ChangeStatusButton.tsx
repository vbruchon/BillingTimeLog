'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { changeProjectStatus } from '../../../../../app/admin/dashboard/projects/[projectId]/project.action'

export type ChangeStatusButtonProps = {
    id: string
    status: string
}

export const ChangeStatusButton = ({ id, status }: ChangeStatusButtonProps) => {
    return (
        <form>
            <Button
                variant={'outline'}
                formAction={() => changeProjectStatus(id)}
                className={cn(
                    {
                        'bg-orange-600 hover:bg-orange-800':
                            status === 'completed',
                    },
                    {
                        'bg-green-600 hover:bg-green-800':
                            status === 'in_progress',
                    }
                )}
            >
                {status === 'in_progress'
                    ? 'Mark completed'
                    : 'Mark in progress'}
            </Button>
        </form>
    )
}
