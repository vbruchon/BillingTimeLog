import { useEffect, useRef, useState } from 'react'
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
        | 'zipCode'
        | 'city'
        | 'country'
        | 'tel'
        | 'SIRET'
        | 'VATNumber'
        | 'activityCode'
    form: UseFormReturn<
        {
            image: string | null
            name: string | null
            email: string
            companyName: string | null
            address: string | null
            zipCode: string | null
            city: string | null
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
    const divRef = useRef(null)
    const [pencilPosition, setPencilPosition] = useState(null)

    useEffect(() => {
        setEditing(false)
    }, [initialValue])

    useEffect(() => {
        if (divRef.current) {
            //@ts-ignore
            const { width } = divRef.current.getBoundingClientRect()
            setPencilPosition(width + 20)
        }
    }, [])

    const startEditing = () => setEditing(true)

    return isEditing || !initialValue ? (
        <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <FormItem className="text-center">
                    <FormControl>
                        <Input
                            className={cn('text-center text-base', className)}
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
                className={cn('hover:cursor-pointer', textClassName)}
                ref={divRef}
                onClick={startEditing}
                onMouseEnter={() => setisHover(true)}
                onMouseOut={() => setisHover(false)}
            >
                {initialValue}
            </div>
            {isHover && pencilPosition && (
                <Pencil
                    size={20}
                    className="absolute"
                    style={{ left: `${pencilPosition}px` }}
                />
            )}
        </div>
    )
}
