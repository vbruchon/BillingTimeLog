'use client'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    useZodForm,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signIn } from 'next-auth/react'
import { checkIfEmailIsClientAction } from './customers-login.action'
import { CustomerLogInFormSchema } from './customers-login.schema'
import { useState } from 'react'
import AlertErrorLogin from './AlertErrorLogin'
import { Button } from '@/components/ui/button'

export const CustomerLogInForm = () => {
    const form = useZodForm({
        schema: CustomerLogInFormSchema,
    })
    const [error, setError] = useState('')

    return (
        <>
            <Form
                form={form}
                className="flex flex-col gap-4"
                onSubmit={async (values) => {
                    console.log(values)

                    const customer = await checkIfEmailIsClientAction(values)
                    if (customer) {
                        const email = customer.email
                        const customerId = customer.id
                        const companyName = customer.companyName

                        await signIn('email', {
                            email,
                            name: companyName,
                            callbackUrl: `/customers/${customerId}/projects`,
                        })
                    } else {
                        setError(
                            `Sorry, your email is not associated with any customers. Try with an other email`
                        )
                    }
                }}
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg">Email</FormLabel>
                            <FormControl>
                                <Input
                                    autoFocus
                                    placeholder="example@email.fr"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-xl" />
                        </FormItem>
                    )}
                />
                <Button className="mx-auto mt-4" type="submit">
                    Log In with email
                </Button>
            </Form>
            {error && <AlertErrorLogin error={error} />}
        </>
    )
}
