import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MoreVertical, Pencil } from 'lucide-react'
import { DeleteButtonWithConfirmation } from './DeleteButtonWithConfirmation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChangeStatusButton } from './ChangeStatusButton'

export type ActionButtonProps = {
    id: string
    status?: string
    editLink: string
    deleteItem: (id: string) => void
    changeStatus?: (id: string) => void
    element: string
}

export const ActionButton = ({
    id,
    status,
    editLink,
    deleteItem,
    changeStatus,
    element,
}: ActionButtonProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    <MoreVertical />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <DropdownMenuGroup className="flex flex-col">
                    <div className="flex items-center justify-center">
                        <DropdownMenuItem className="w-1/2">
                            <Link href={editLink} className="m-auto">
                                <Pencil size={22} />
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="w-1/2" asChild>
                            <DeleteButtonWithConfirmation
                                id={id}
                                element={element}
                                deleteFunction={deleteItem}
                            />
                        </DropdownMenuItem>
                    </div>
                    {changeStatus && status && (
                        <DropdownMenuItem>
                            <ChangeStatusButton id={id} status={status} />
                        </DropdownMenuItem>
                    )}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
