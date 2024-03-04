import { CustomerForm } from './CustomerForm'
import { Typography } from '@/components/ui/Typography'
import { Card, CardContent } from '@/components/ui/card'
import { getCustomerById } from '../customers.query'

export default async function CustomerPage({
    params,
}: {
    params: { customerId: string }
}) {
    const customer = await getCustomerById(params.customerId)
    return (
        <>
            <Typography variant={'h1'}>Edit {customer.companyName}</Typography>
            <Card className="mx-auto mt-8 w-2/3">
                <CardContent className="p-4">
                    <CustomerForm defaultValue={customer} />
                </CardContent>
            </Card>
        </>
    )
}
