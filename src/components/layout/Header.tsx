import { SiteConfig } from '@/lib/site-config'
import Link from 'next/link'
import Image from 'next/image'
import { Typography } from '@/components/ui/Typography'
import { ThemeToggleButton } from '../theme/ThemeToggleButton'
import { AuthButton } from '../features/auth/AuthButton'

export function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center  space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex flex-1 items-center gap-2 md:gap-10">
                    <Image
                        src="/images/logo_billingTimeLog_white.png"
                        width={40}
                        height={30}
                        alt="app logo"
                    />
                    <Typography variant="h3" as={Link} href="/">
                        {SiteConfig.title}
                    </Typography>
                </div>

                <div className="flex flex-1 items-center justify-end space-x-12">
                    <nav className="flex items-center space-x-1">
                        <AuthButton />
                        <ThemeToggleButton />
                    </nav>
                </div>
            </div>
        </header>
    )
}
