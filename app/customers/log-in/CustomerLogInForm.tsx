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

export const CustomerLogInForm = () => {
    const form = useZodForm({
        schema: CustomerLogInFormSchema,
    })
    const [error, setError] = useState('')

    return (
        <>
            <Form
                form={form}
                onSubmit={async (values) => {
                    const customer = await checkIfEmailIsClientAction(values)
                    if (customer) {
                        const email = customer.email
                        const customerId = customer.id
                        await signIn('email', {
                            email,
                            customerId,
                            callbackUrl: `/customers/${customerId}/projects`,
                        })
                    } else {
                        setError(
                            `Sorry, your email is not associated with any customers.`
                        )
                    }
                }}
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xl">Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="example@email.fr"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-xl" />
                        </FormItem>
                    )}
                />
                <button type="submit">Log In with email</button>
            </Form>
            {error && <AlertErrorLogin error={error} />}
        </>
    )
}
