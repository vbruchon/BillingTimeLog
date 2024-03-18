'use client'
import { Form, useZodForm } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { HourEntryFormSchema } from '../hourEntry.schema'
import { hourEntryActionCreate, hourEntryActionEdit } from '../hourEntry.action'
import { HourEntryFormDataPicker } from './HourEntryFormDataPicker'
import { HourEntryFormDuration } from './HourEntryDuration'
import { HourEntryFormRate } from './HourEntryFormRate'
import { HourEntryFormReason } from './HourEntryFormReason'
import { HourEntryFormProjectSelect } from './HourEntryFormProjectSelect'

export type HourEntryFormProps = {
    defaultValue?: HourEntryFormSchema & {
        id: string
        projectId: string
    }
    projects: {
        id: string
        name: string
    }[]
}

export const HourEntryForm = ({
    defaultValue,
    projects,
}: HourEntryFormProps) => {
    const form = useZodForm({
        schema: HourEntryFormSchema,
        defaultValues: defaultValue,
    })

    const router = useRouter()

    const handleSubmit = async (values: HourEntryFormSchema) => {
        const { data, serverError } = defaultValue
            ? await hourEntryActionEdit({
                  hourEntryId: defaultValue.id,
                  data: values,
              })
            : await hourEntryActionCreate(values)

        if (data) {
            toast.success(data.message)
            router.push('/admin/dashboard/hours')
            router.refresh()
            return
        }
        toast.error('Some error occurred', {
            description: serverError,
        })
        return
    }

    return (
        <Form form={form} onSubmit={handleSubmit} className="flex flex-col">
            <div className="item-center flex gap-8">
                <HourEntryFormDataPicker
                    defaultValue={defaultValue?.date}
                    form={form}
                />
                <HourEntryFormDuration form={form} />
                <HourEntryFormRate form={form} />
            </div>
            <div className="item-center mt-8 flex gap-6">
                <HourEntryFormReason defaultValue={defaultValue} form={form} />
                <HourEntryFormProjectSelect
                    projects={projects}
                    defaultValue={defaultValue}
                    form={form}
                />
            </div>
            <div className="mt-4 flex justify-end">
                <Button type="submit">
                    {defaultValue ? 'Update Hour' : 'Create Hour'}
                </Button>
            </div>
        </Form>
    )
}
