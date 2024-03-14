import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren, ReactNode } from 'react'
import './globals.css'
import { TailwindIndicator } from '@/components/features/utils/TailwindIndicator'
import { Providers } from './Provider'
import { SiteConfig } from '@/lib/site-config'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
    title: SiteConfig.title,
    description: SiteConfig.description,
}

export default function RootLayout({
    children,
    modal,
}: PropsWithChildren<{
    modal?: ReactNode
}>) {
    return (
        <html lang="en" className="h-full" suppressHydrationWarning>
            <head />
            <body
                cz-shortcut-listen="true"
                className={cn(
                    'h-full bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                <Providers>
                    <div className="relative flex min-h-screen flex-col">
                        <div className="flex-1">
                            {children}
                            {modal}
                        </div>
                    </div>
                    <TailwindIndicator />
                </Providers>
            </body>
        </html>
    )
}
