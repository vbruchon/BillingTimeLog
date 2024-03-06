import { useEffect, useState } from 'react'
import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Pencil } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'
import { cn } from '@/lib/utils'

export type EditableFieldProps = {
    initialValue: string | null
    fieldName:
        | 'name'
        | 'image'
        | 'email'
        | 'companyName'
        | 'address'
        | 'country'
        | 'tel'
        | 'SIRET'
        | 'VATNumber'
        | 'activityCode'
    form: UseFormReturn<
        {
            image: string | null
            name: string
            email: string
            companyName: string | null
            address: string | null
            country: string | null
            tel: string | null
            SIRET: string | null
            VATNumber: string | null
            activityCode: string | null
        },
        any,
        undefined
    >
    className?: string
    textClassName?: string
}

export const EditableField: React.FC<EditableFieldProps> = ({
    initialValue,
    fieldName,
    form,
    className,
    textClassName,
}) => {
    const [isHover, setisHover] = useState(false)
    const [isEditing, setEditing] = useState(false)

    useEffect(() => {
        setEditing(false)
    }, [initialValue])

    const startEditing = () => setEditing(true)

    return isEditing ? (
        <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <FormItem className="mt-2 text-center">
                    <FormControl>
                        <Input
                            className="text-center text-lg"
                            {...field}
                            type="text"
                            placeholder={`Enter ${fieldName}`}
                            value={field.value || ''}
                            onChange={(e) => field.onChange(e.target.value)}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    ) : (
        <div className={cn('relative flex items-center gap-4', className)}>
            <div
                className={cn(
                    'mx-auto text-xl hover:cursor-pointer',
                    textClassName
                )}
                onClick={startEditing}
                onMouseEnter={() => setisHover(true)}
                onMouseOut={() => setisHover(false)}
            >
                {initialValue}
            </div>
            {isHover && <Pencil size={20} className="absolute right-0" />}
        </div>
    )
}
