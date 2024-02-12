'use client'

import { Session } from 'next-auth'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LogOut, ShieldCheck, User2 } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { Loader } from '@/components/ui/loader'
import { useMutation } from '@tanstack/react-query'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import Link from 'next/link'
import { Typography } from '@/components/ui/Typography'
import { cn } from '@/lib/utils'
import LogOutButton from './LogOutButton'

export type LoggedInButtonProps = {
    user: Session['user']
}

const DEFAULT_AVATAR = '/images/defaultAvatar.png'

export const LoggedInButton = (props: LoggedInButtonProps) => {
    const mutation = useMutation({
        mutationFn: async () => {
            signOut()
        },
    })

    return (
        <DropdownMenu>
            <AlertDialog>
                <DropdownMenuTrigger>
                    <div
                        className={cn(
                            'flex items-center p-2',
                            'rounded-lg border border-gray-500 bg-transparent shadow-sm',
                            'hover:cursor-pointer hover:bg-accent hover:text-accent-foreground'
                        )}
                    >
                        <Avatar className="mr-4 size-9">
                            <AvatarFallback>
                                {props.user?.name?.[0]}
                            </AvatarFallback>
                            {props.user.image && (
                                <AvatarImage
                                    src={props.user.image}
                                    alt={props.user.name ?? DEFAULT_AVATAR}
                                />
                            )}
                        </Avatar>
                        {props.user.name}
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col items-center p-2">
                    <DropdownMenuItem className="p-4" asChild>
                        <Link href="/admin/dashboard">
                            <User2 className="mr-2" size={16} />
                            My Dashboard
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <AlertDialogTrigger asChild>
                        <DropdownMenuItem>
                            <LogOutButton />
                        </DropdownMenuItem>
                    </AlertDialogTrigger>
                </DropdownMenuContent>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you sure you want to logout
                        </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel asChild>
                            <Button variant="secondary">Cancel</Button>
                        </AlertDialogCancel>
                        <Button
                            variant="destructive"
                            disabled={mutation.isPending}
                            onClick={() => {
                                mutation.mutate()
                            }}
                        >
                            {mutation.isPending ? (
                                <Loader className="mr-2" size={16} />
                            ) : (
                                <LogOut size={50} className="mr-2 size-4" />
                            )}
                            Logout
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </DropdownMenu>
    )
}
