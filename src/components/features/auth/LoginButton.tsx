'use client'

import { Button } from '../../ui/button'
import { signIn } from 'next-auth/react'
import { LogIn } from 'lucide-react'
import { Loader } from '@/components/ui/loader'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export const LoginButton = () => {
    const mutation = useMutation({
        mutationFn: async () =>
            signIn('github', { callbackUrl: '/admin/dashboard' }),
    })
    const [isCustomersPage, setIsCustomersPage] = useState(false)

    useEffect(() => {
        if (window.location.pathname.startsWith('/customers')) {
            setIsCustomersPage(true)
        }

        const handleChange = () => {
            if (window.location.pathname.startsWith('/customers')) {
                setIsCustomersPage(true)
            } else {
                setIsCustomersPage(false)
            }
        }

        window.addEventListener('popstate', handleChange)

        return () => window.removeEventListener('popstate', handleChange)
    }, [])

    if (isCustomersPage) {
        return null
    }
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
                <LogIn size={50} className="mr-2 size-4 " />
            )}
            Login
        </Button>
    )
}
