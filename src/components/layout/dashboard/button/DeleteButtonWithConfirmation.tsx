'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { deleteCustomer } from '../../../../../app/dashboard/customers/customers.action'

type DeleteButtonProps = {
    id: string
}
export const DeleteButtonWithConfirmation = ({ id }: DeleteButtonProps) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant={'destructive'}>
                    <Trash2 size={22} />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete the customer and remove your data from our
                        servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <form>
                            <Button
                                variant={'destructive'}
                                formAction={() => deleteCustomer(id)}
                            >
                                <Trash2 size={22} />
                            </Button>
                        </form>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
