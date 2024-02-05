'use client'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    useZodForm,
} from '@/components/ui/form'
import { CustomerFormSchema } from '../customers.schema'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { customerActionEdit } from '../customers.action'
import { toast } from 'sonner'

export type CustomerFormProps = {
    defaultValue?: CustomerFormSchema & {
        id: string
    }
    customerId: string
}

export const CustomerForm = ({
    defaultValue,
    customerId,
}: CustomerFormProps) => {
    const form = useZodForm({
        schema: CustomerFormSchema,
        defaultValues: defaultValue,
    })

    return (
        <Form
            form={form}
            onSubmit={async (values) => {
                if (defaultValue) {
                    const { data, serverError } = await customerActionEdit({
                        customerId: customerId,
                        data: values,
                    })
                    if (data) {
                        toast.success('hello')
                        console.log(data.message)
                        return
                    }
                    toast.error('Some error occurred', {
                        description: serverError,
                    })
                    return
                } else {
                    //create customer
                }
            }}
        >
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xl">Company name</FormLabel>
                        <FormControl>
                            <Input placeholder="VBCODE" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is the name of your customer.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xl">Email</FormLabel>
                        <FormControl>
                            <Input placeholder="example@email.fr" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is the email of your customer.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button type="submit">Submit</Button>
        </Form>
    )
}
