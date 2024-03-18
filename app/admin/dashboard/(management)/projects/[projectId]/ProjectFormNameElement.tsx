import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export type ProjectFormNameElementProps = {
    form: any
}

export const ProjectFormNameElement = ({
    form,
}: ProjectFormNameElementProps) => {
    return (
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem className="flex w-[460px] flex-col items-start">
                    <FormLabel className="mb-1 text-lg">Project Name</FormLabel>
                    <FormControl>
                        <Input
                            placeholder="Enter project name"
                            {...field}
                            className="rounded-md border px-4 py-2 text-lg"
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
