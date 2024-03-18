import { Typography } from '@/components/ui/Typography'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

export const SideBarHeader = () => {
    const { theme } = useTheme()

    return (
        <>
            <Link href={'/'}>
                <div className="flex items-center justify-center gap-2">
                    <Image
                        src={
                            theme === 'light'
                                ? '/images/logo_billingTimeLog_blue.png'
                                : '/images/logo_billingTimeLog_white.png'
                        }
                        alt="BillingTimeLog's logo"
                        className="text-foreground"
                        width={30}
                        height={30}
                    />
                    <Typography
                        variant={'base'}
                        className=" bg-gradient-to-r from-muted-foreground to-primary bg-clip-text text-transparent dark:from-foreground dark:to-primary"
                    >
                        BillingTimeLog
                    </Typography>
                </div>
            </Link>
            <hr
                style={{
                    borderWidth: '0 0 medium',
                    borderStyle: 'solid solid none',
                }}
                className="my-3 h-[0.08rem] border-solid bg-gradient-to-r from-transparent via-muted-foreground to-transparent opacity-65 dark:via-white"
            />
        </>
    )
}
