import { Typography } from '@/components/ui/Typography'
import { Card, CardContent } from '@/components/ui/card'
import { CustomerForm } from '../[customerId]/_components/CustomerForm'

export default async function CreateCustomerPage() {
    return (
        <>
            <Typography variant={'h1'}>Create Customer</Typography>
            <Card className="mx-auto mt-8 w-2/3">
                <CardContent className="p-4">
                    <CustomerForm />
                </CardContent>
            </Card>
        </>
    )
}
