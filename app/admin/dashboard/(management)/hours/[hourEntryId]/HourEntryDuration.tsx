import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { UseFormReturn } from 'react-hook-form'

export type formProps = {
    form: UseFormReturn<
        {
            duration: string
            date: Date
            reason: string
            rate: string
            projectId: string
        },
        any,
        undefined
    >
}

export const HourEntryFormDuration = ({ form }: formProps) => {
    return (
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
    )
}
