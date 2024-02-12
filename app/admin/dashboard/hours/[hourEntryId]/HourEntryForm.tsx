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
import { useRouter } from 'next/navigation'
import { HourEntryFormSchema } from './hourEntry.schema'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { hourEntryActionCreate, hourEntryActionEdit } from './hourEntry.action'

export type CustomerFormProps = {
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
}: CustomerFormProps) => {
    const form = useZodForm({
        schema: HourEntryFormSchema,
        defaultValues: defaultValue,
    })

    const router = useRouter()

    const hourEntryProject = projects.find(
        (project) => project.id === defaultValue?.projectId
    )

    return (
        <Form
            form={form}
            onSubmit={async (values) => {
                const { data, serverError } = defaultValue
                    ? await hourEntryActionEdit({
                          hourEntryId: defaultValue.id,
                          data: values,
                      })
                    : await hourEntryActionCreate(values)

                if (data) {
                    toast.success(data.message)
                    router.back()
                    return
                }
                toast.error('Some error occurred', {
                    description: serverError,
                })
                return
            }}
        >
            <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xl">Date</FormLabel>
                        <FormControl>
                            <Input
                                type="date"
                                {...field}
                                value={
                                    defaultValue
                                        ? defaultValue.date
                                              .toISOString()
                                              .split('T')[0]
                                        : new Date().toISOString().split('T')[0]
                                }
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xl">Reason</FormLabel>
                        <FormControl>
                            <Input
                                type="text"
                                placeholder={
                                    defaultValue
                                        ? defaultValue.reason
                                        : 'setup project | create theme ...'
                                }
                                {...field}
                            />
                        </FormControl>
                        <FormDescription>
                            This is the reason of why you have work.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xl">Duration</FormLabel>
                        <FormControl>
                            <Input
                                type="number"
                                placeholder="Choose a duration"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="rate"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xl">Rate</FormLabel>
                        <FormControl>
                            <Input
                                type="number"
                                step={0.01}
                                placeholder="45"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="invoiceStatus"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xl">Status</FormLabel>
                        <FormControl>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue
                                        placeholder={
                                            defaultValue
                                                ? defaultValue.invoiceStatus
                                                : 'Choose a status'
                                        }
                                        {...field}
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Pending">
                                        Pending
                                    </SelectItem>
                                    <SelectItem value="Paid">Paid</SelectItem>
                                    <SelectItem value="Overdue">
                                        Overdue
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="projectId"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xl">Project</FormLabel>
                        <FormControl>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue
                                        placeholder={
                                            defaultValue
                                                ? hourEntryProject?.name
                                                : 'Choose a project'
                                        }
                                        {...field}
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    {projects.map((project, index) => (
                                        <SelectItem
                                            key={index}
                                            value={project.name}
                                        >
                                            {project.name}
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
