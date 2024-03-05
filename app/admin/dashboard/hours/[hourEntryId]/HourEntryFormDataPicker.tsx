/* 'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { toast } from '@/components/ui/use-toast'

const FormSchema = z.object({
    dob: z.date({
        required_error: 'A date of birth is required.',
    }),
})

export function DatePickerForm() {
    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        })
    }

    return (
        <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant={'outline'}
                                    className={cn(
                                        'w-[240px] pl-3 text-left font-normal',
                                        !field.value && 'text-muted-foreground'
                                    )}
                                >
                                    {field.value ? (
                                        format(field.value, 'PPP')
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto size-4 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                    date > new Date() ||
                                    date < new Date('1900-01-01')
                                }
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <FormDescription>
                        Your date of birth is used to calculate your age.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
 */

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
