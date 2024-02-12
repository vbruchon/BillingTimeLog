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
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { ProjectFormSchema } from './project.schema'
import { projectActionCreate, projectActionEdit } from './project.action'
import { CustomerFormSchema } from '../../customers/customers.schema'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { useRouter } from 'next/navigation'

export type ProjectFormProps = {
    defaultValue?: ProjectFormSchema & {
        id: string
    }
    customers: {
        id: string
        name: string
        email: string
    }[]
}

export const ProjectForm = ({ defaultValue, customers }: ProjectFormProps) => {
    const form = useZodForm({
        schema: ProjectFormSchema,
        defaultValues: defaultValue,
    })

    const router = useRouter()

    const projectCustomer = defaultValue
        ? customers.find((customer) => customer.id === defaultValue?.customerId)
        : null
    const otherCustomers = defaultValue
        ? customers.filter(
              (customer) => customer.id !== defaultValue?.customerId
          )
        : null

    return (
        <Form
            form={form}
            className="flex items-center"
            onSubmit={async (values) => {
                if (defaultValue) {
                    const { data, serverError } = defaultValue
                        ? await projectActionEdit({
                              projectId: defaultValue.id,
                              data: values,
                          })
                        : await projectActionCreate(values)

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
                                        placeholder={
                                            defaultValue
                                                ? projectCustomer?.name
                                                : 'Choose a customer'
                                        }
                                        {...field}
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    {defaultValue
                                        ? otherCustomers?.map(
                                              (customer, index) => (
                                                  <SelectItem
                                                      key={index}
                                                      value={customer.name}
                                                  >
                                                      {customer.name}
                                                  </SelectItem>
                                              )
                                          )
                                        : customers.map((customer, index) => (
                                              <SelectItem
                                                  key={index}
                                                  value={customer.name}
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
