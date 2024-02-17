'use client'

import { Button } from '../../ui/button'
import { signIn } from 'next-auth/react'
import { LogIn } from 'lucide-react'
import { Loader } from '@/components/ui/loader'
import { useMutation } from '@tanstack/react-query'

export const LoginButton = () => {
    const mutation = useMutation({
        mutationFn: async () => signIn('github'),
    })

    return (
        <Button
            variant="outline"
            size="default"
            disabled={mutation.isPending}
            onClick={() => {
                mutation.mutate()
            }}
        >
            {mutation.isPending ? (
                <Loader className="mr-2" size={16} />
            ) : (
                <LogIn size={50} className="mr-2 h-4 w-4 " />
            )}
            Login
        </Button>
    )
}
