'use client'
import { Form, useZodForm } from '@/components/ui/form'
import { CustomerFormSchema } from '../../customers.schema'
import { Button } from '@/components/ui/button'
import {
    customerActionCreate,
    customerActionEdit,
} from '../../customers.action'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { CustomerFormLogoElement } from './CustomerFormLogoElement'
import { CustomerFormCompanyInfo } from './CustomerFormCompanyInfo'
import { CustomerFormContactInfo } from './CustomerFormContactInfo'
import { CustomerFormButton } from './CustomerFormButton'
import { log } from 'console'

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
    const buttonText = defaultValue ? 'Update Customer' : 'Create Customer'

    return (
        <Form
            form={form}
            className="relative flex flex-col p-4"
            onSubmit={async (values) => {
                if (defaultValue) {
                    const { data, serverError } = await customerActionEdit({
                        customerId: defaultValue.id,
                        data: values,
                    })
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
                } else {
                    const { data, serverError } =
                        await customerActionCreate(values)
                    if (data) {
                        console.log('success')
                        toast.success(data.message)
                        router.back()
                        return
                    }
                    console.log('error')

                    toast.error('Some error occurred', {
                        description: serverError,
                    })
                    return
                }
            }}
        >
            <div className="mb-8 flex flex-col">
                <CustomerFormLogoElement form={form} />
                <CustomerFormCompanyInfo form={form} />
                <CustomerFormContactInfo form={form} />
                <CustomerFormButton text={buttonText} />
            </div>
        </Form>
    )
}

/* 

            !!!!!! JE NE PEUX PAS CRÉER DE CUSTOMER RIEN NE SE PASSE !!!!!

*/
