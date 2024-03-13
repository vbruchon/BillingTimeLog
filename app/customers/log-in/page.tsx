import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CustomerLogInForm } from './CustomerLogInForm'
import { Typography } from '@/components/ui/Typography'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

const CustomersLoginPage = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <Card className=" w-1/5">
                <CardHeader className="flex flex-col items-center gap-4">
                    <Image
                        src={'/images/logo_billingTimeLog_white.png'}
                        alt="billingTimeLog's logo"
                        width={100}
                        height={100}
                    />
                    <CardTitle className="flex flex-col gap-4 text-xl">
                        Log in with your email
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CustomerLogInForm />
                </CardContent>
            </Card>
        </div>
    )
}

export default CustomersLoginPage
