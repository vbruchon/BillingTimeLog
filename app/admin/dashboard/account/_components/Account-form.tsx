'use client'

import LogOutButton from '@/components/features/auth/LogOutButton'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Form, useZodForm } from '@/components/ui/form'
import { AccountFormSchema } from '../account.schema'
import { userActionEdit } from '../user.action'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { AccountCompanyInfo } from './AccountCompanyInfo'
import { AccountGeneralInfo } from './AccountGeneralInfo'

export type AccountformProps = {
    user: AccountFormSchema
}

export const Accountform = ({ user }: AccountformProps) => {
    const form = useZodForm({
        schema: AccountFormSchema,
        defaultValues: user,
    })
    const router = useRouter()

    const handleSubmit = async (values: AccountFormSchema) => {
        const { data, serverError } = await userActionEdit({
            data: values,
        })
        if (data) {
            toast.success(data.message)
            router.refresh()
            return
        }
        toast.error('Some error occurred', {
            description: serverError,
        })
        return
    }

    return (
        <Card className="m-auto max-w-lg">
            <Form
                form={form}
                className="relative flex flex-col p-4"
                onSubmit={handleSubmit}
            >
                <CardHeader className="flex flex-col items-center gap-6">
                    <AccountGeneralInfo user={user} form={form} />
                </CardHeader>
                <CardContent>
                    <AccountCompanyInfo form={form} user={user} />
                </CardContent>
                <CardFooter className="flex flex-row-reverse gap-x-4">
                    {form.formState.isDirty && (
                        <Button type="submit">Save</Button>
                    )}
                    <LogOutButton />
                </CardFooter>
            </Form>
        </Card>
    )
}
