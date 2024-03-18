import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formProps } from './HourEntryDuration'
import { HourEntryFormSchema } from '../hourEntry.schema'

export type HourEntryFormReasonProps = {
    defaultValue?: HourEntryFormSchema
}

export const HourEntryFormReason = ({
    form,
    defaultValue,
}: HourEntryFormReasonProps & formProps) => {
    return (
        <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
                <FormItem className=" w-3/5">
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
                            value={field.value !== undefined ? field.value : ''}
                        />
                    </FormControl>
                    <FormDescription>
                        This is the reason of why you have work.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
