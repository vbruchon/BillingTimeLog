import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '@/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { HourEntryFormProps } from './HourEntryForm'
import { HourEntryFormSchema } from '../hourEntry.schema'
import { formProps } from './HourEntryDuration'

export type HourEntryFormProjectSelectProps = {
    projects: HourEntryFormProps['projects']
    defaultValue?: HourEntryFormSchema
}

export const HourEntryFormProjectSelect = ({
    projects,
    defaultValue,
    form,
}: HourEntryFormProjectSelectProps & formProps) => {
    const hourEntryProject = projects.find(
        (project) => project.id === defaultValue?.projectId
    )
    return (
        <FormField
            control={form.control}
            name="projectId"
            render={({ field }) => (
                <FormItem className="flex-1">
                    <FormLabel className="text-xl">Project</FormLabel>
                    <FormControl>
                        <Select
                            onValueChange={(value: string) => {
                                field.onChange(value)
                            }}
                        >
                            <SelectTrigger className="w-full">
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
                                    <SelectItem key={index} value={project.id}>
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
    )
}
