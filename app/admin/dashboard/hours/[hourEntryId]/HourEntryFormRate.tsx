import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formProps } from './HourEntryDuration'

export const HourEntryFormRate = ({ form }: formProps) => {
    return (
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
                            value={field.value !== undefined ? field.value : ''}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
