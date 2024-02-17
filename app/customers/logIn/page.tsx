'use client '
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import { CustomerLogInForm } from './CustomerLogInForm'
import AlertErrorLogin from './AlertErrorLogin'

const CustomersLoginPage = () => {
    const [error, setError] = useState('')

    return (
        <div>
            <Card className="mx-auto">
                <CardHeader>
                    <CardTitle className="flex flex-col gap-4">
                        LogIn with your email
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CustomerLogInForm setError={setError} />
                </CardContent>
            </Card>
            {error && <AlertErrorLogin error={error} />}
        </div>
    )
}

export default CustomersLoginPage
