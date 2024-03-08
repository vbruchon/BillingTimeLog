'use client'

import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { forwardRef, useEffect, useState } from 'react'
import {
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

export type HourEntryFormDataPickerProps = {
    defaultValue?: Date
    form: any
}

export const HourEntryFormDataPicker = forwardRef<
    HTMLButtonElement,
    HourEntryFormDataPickerProps
>((props, ref) => {
    const [date, setDate] = useState<Date>(props.defaultValue ?? new Date())

    useEffect(() => {
        setDate(props.defaultValue ?? new Date())
    }, [props.defaultValue])

    return (
        <FormField
            control={props.form.control}
            name="date"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel className="text-xl">Date</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                ref={ref}
                                variant={'outline'}
                                className={cn(
                                    'w-[280px] justify-start text-left font-normal',
                                    !field.value && 'text-muted-foreground'
                                )}
                            >
                                <CalendarIcon className="mr-2 size-4" />
                                {field.value ? (
                                    format(field.value, 'PPP')
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                    date > new Date() ||
                                    date < new Date('2020-01-01')
                                }
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
})

HourEntryFormDataPicker.displayName = 'HourEntryFormDataPicker'
