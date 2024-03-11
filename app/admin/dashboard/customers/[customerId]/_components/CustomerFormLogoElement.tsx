'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'

export type CustomerFormLogoElementProps = {
    form: any
}

export const CustomerFormLogoElement = ({
    form,
}: CustomerFormLogoElementProps) => {
    const [editLogo, setEditLogo] = useState(false)
    const [urlLogo, setUrlLogo] = useState('')

    return (
        <FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
                <div className="flex flex-col items-center">
                    <Avatar
                        onClick={() => setEditLogo((prev) => !prev)}
                        className="absolute left-auto top-[-12%] size-40 overflow-hidden rounded-full hover:cursor-pointer"
                    >
                        <AvatarFallback>logo</AvatarFallback>
                        <AvatarImage
                            src={urlLogo || field.value}
                            className="size-full object-cover"
                        />
                    </Avatar>

                    {editLogo && (
                        <FormItem className=" mt-16 w-[35%] text-center">
                            <FormControl>
                                <Input
                                    id="logo-input"
                                    placeholder="https://image.google.fr"
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        setUrlLogo(e.target.value)
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
