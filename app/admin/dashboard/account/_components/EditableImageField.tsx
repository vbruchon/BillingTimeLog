import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Pencil } from 'lucide-react'
import { useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { EditableFieldProps } from './EditableField'

type EditableImageElementProps = {
    form: EditableFieldProps['form']
    fieldName: EditableFieldProps['fieldName']
    size?: string
}

export const EditableImageField = ({
    form,
    fieldName,
    size = '40',
}: EditableImageElementProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isEditing, setEditing] = useState(false)
    const [url, setUrl] = useState('')

    return (
        <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <div
                    className="flex flex-col items-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Avatar
                        onClick={() => setEditing((prev) => !prev)}
                        className={`size-${size} overflow-hidden rounded-full hover:cursor-pointer`}
                    >
                        <AvatarFallback>Profile image</AvatarFallback>
                        <AvatarImage
                            src={field.value ?? ''}
                            className="size-full object-cover"
                        />
                        {isHovered && !isEditing && (
                            <div className="absolute left-0 top-0 flex size-full items-center justify-center bg-gray-800/75">
                                <Pencil size={30} className="" />
                            </div>
                        )}
                    </Avatar>

                    {isEditing && (
                        <FormItem className="mt-2 w-[150%] text-center">
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder={field.value ?? 'Profil Image'}
                                    value={field.value ?? ''}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        setUrl(e.target.value)
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                </div>
            )}
        />
    )
}
