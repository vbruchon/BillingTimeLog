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
import { customerActionCreate, customerActionEdit } from '../customers.action'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export type CustomerFormProps = {
    defaultValue?: CustomerFormSchema & {
        id: string
    }
}

export const CustomerForm = ({ defaultValue }: CustomerFormProps) => {
    const form = useZodForm({
        schema: CustomerFormSchema,
        defaultValues: defaultValue,
    })

    const router = useRouter()

    return (
        <Form
            form={form}
            onSubmit={async (values) => {
                if (defaultValue) {
                    const { data, serverError } = await customerActionEdit({
                        customerId: defaultValue.id,
                        data: values,
                    })
                    if (data) {
                        toast.success(data.message)
                        return
                    }
                    toast.error('Some error occurred', {
                        description: serverError,
                    })
                    return
                } else {
                    const { data, serverError } =
                        await customerActionCreate(values)
                    if (data) {
                        toast.success(data.message)
                        router.back()
                        return
                    }
                    toast.error('Some error occurred', {
                        description: serverError,
                    })
                    return
                }
            }}
        >
            <FormField
                control={form.control}
                name="companyName"
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
