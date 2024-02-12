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
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { ProjectFormSchema } from './project.schema'
import { projectActionEdit } from './project.action'
import { CustomerFormSchema } from '../../customers/customers.schema'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export type ProjectFormProps = {
    defaultValue?: ProjectFormSchema & {
        id: string
    }
    projectId: string
    otherCustomers: CustomerFormSchema[]
    projectCustomer?: string
}

export const ProjectForm = ({
    defaultValue,
    projectId,
    otherCustomers,
    projectCustomer,
}: ProjectFormProps) => {
    const form = useZodForm({
        schema: ProjectFormSchema,
        defaultValues: defaultValue,
    })
    return (
        <Form
            form={form}
            className="flex items-center"
            onSubmit={async (values) => {
                if (defaultValue) {
                    const { data, serverError } = await projectActionEdit({
                        projectId: projectId,
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
                    //create project
                }
            }}
        >
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem className="">
                        <FormLabel className="text-xl">Project name</FormLabel>
                        <FormControl>
                            <Input placeholder="VBCODE" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="customerId"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xl">Customer</FormLabel>
                        <FormControl>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue
                                        placeholder={projectCustomer}
                                        {...field}
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    {otherCustomers.map((customer) => (
                                        <SelectItem
                                            key={customer.id}
                                            value={customer.id}
                                        >
                                            {customer.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <Button type="submit">Submit</Button>
        </Form>
    )
}
