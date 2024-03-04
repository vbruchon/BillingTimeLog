'use client'
import { Form, useZodForm } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { ProjectFormSchema } from './project.schema'
import { projectActionCreate, projectActionEdit } from './project.action'
import { useRouter } from 'next/navigation'
import { ProjectFormNameElement } from './ProjectFormNameElement'
import { ProjectFormSelectCustomer } from './ProjectFormSelectCutomer'

export type ProjectFormProps = {
    defaultValue?: ProjectFormSchema & {
        id: string
    }
    customers: {
        id: string
        companyName: string
        email: string
        logo: string
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
            className="flex flex-col items-center space-y-8 rounded-md p-4 shadow-md"
            onSubmit={async (values) => {
                console.log(values)

                const { data, serverError } = defaultValue
                    ? await projectActionEdit({
                          projectId: defaultValue.id,
                          data: values,
                      })
                    : await projectActionCreate(values)

                if (data) {
                    toast.success(data.message)
                    router.back()
                    router.refresh()
                    return
                }
                toast.error('Some error occurred', {
                    description: serverError,
                })
                return
            }}
        >
            <ProjectFormNameElement form={form} />
            <ProjectFormSelectCustomer
                form={form}
                defaultValue={defaultValue}
                projectCustomer={projectCustomer}
                otherCustomers={otherCustomers}
                customers={customers}
            />

            <Button type="submit" className="rounded-md px-6 py-3">
                Submit
            </Button>
        </Form>
    )
}
