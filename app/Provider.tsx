'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import { PropsWithChildren, useState } from 'react'
import { Toaster } from 'sonner'

const queryClient = new QueryClient()

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <Toaster />
                    <SessionProvider>{children}</SessionProvider>
                </ThemeProvider>
            </QueryClientProvider>
        </>
    )
}
