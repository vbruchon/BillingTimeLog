'use client'

import LogOutButton from '@/components/features/auth/LogOutButton'
import { Typography } from '@/components/ui/Typography'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    useZodForm,
} from '@/components/ui/form'
import {
    Building2,
    MapPin,
    Package,
    FileText,
    Clipboard,
    Pencil,
} from 'lucide-react'
import { UserInfoItem } from './userInfoItem'
import { AccountFormSchema } from '../account.schema'
import { EditableField } from './EditableField'
import { EditableImageField } from './EditableImageField'
import { userActionEdit } from '../user.action'
import { useRouter } from 'next/navigation'
import { CustomerFormButton } from '../../customers/[customerId]/_components/CustomerFormButton'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export type AccountformProps = {
    user: AccountFormSchema
}

export const Accountform = ({ user }: AccountformProps) => {
    const form = useZodForm({
        schema: AccountFormSchema,
        defaultValues: user,
    })
    const router = useRouter()
    return (
        <Card className="m-auto mt-4 w-5/12">
            <Form
                form={form}
                className="relative flex flex-col p-4"
                onSubmit={async (values) => {
                    console.log(values)

                    const { data, serverError } = await userActionEdit({
                        data: values,
                    })
                    if (data) {
                        console.log('user updated')
                        router.refresh()
                        return
                    }
                    console.log('error :', serverError)
                    return
                }}
            >
                <CardHeader className="flex flex-col items-center gap-4 space-y-0">
                    <EditableImageField form={form} fieldName="image" />
                    <EditableField
                        initialValue={user.name}
                        fieldName="name"
                        form={form}
                        className="w-1/2"
                    />
                    <EditableField
                        initialValue={user.email}
                        fieldName="email"
                        form={form}
                        className="w-3/4"
                    />
                </CardHeader>
                <CardContent className="flex flex-col gap-2 text-lg">
                    <CardContent className="flex flex-col gap-4">
                        <Typography
                            variant={'h3'}
                            className="text-lg text-muted-foreground"
                        >
                            Company Informations
                        </Typography>
                        <div className="flex flex-col gap-4">
                            <UserInfoItem
                                icon={<Building2 size={26} />}
                                value={user.companyName}
                                form={form}
                                fieldName="companyName"
                                className="w-[200%]"
                            />
                            <UserInfoItem
                                icon={<MapPin size={26} />}
                                value={user.address}
                                secondValue={user.country}
                                form={form}
                                fieldName="address"
                                className="w-[120%]"
                            />
                        </div>
                        <div className="mt-8 flex flex-col flex-wrap gap-4">
                            {user.SIRET && (
                                <UserInfoItem
                                    icon={<Package size={26} />}
                                    label="Siret Number"
                                    value={user.SIRET}
                                    form={form}
                                    fieldName="SIRET"
                                    className="w-[140%]"
                                />
                            )}
                            {user.activityCode && (
                                <UserInfoItem
                                    icon={<Clipboard size={26} />}
                                    label="Activity Code"
                                    value={user.activityCode}
                                    form={form}
                                    fieldName="activityCode"
                                    className="w-[200%]"
                                />
                            )}
                            {user.VATNumber && (
                                <UserInfoItem
                                    icon={<FileText size={26} />}
                                    label="VAT Number"
                                    value={user.VATNumber}
                                    form={form}
                                    fieldName="VATNumber"
                                    className="w-[140%]"
                                />
                            )}
                        </div>
                    </CardContent>
                </CardContent>
                <CardFooter className="flex flex-row-reverse gap-x-4">
                    {form.formState.isDirty && (
                        <Button type="submit">Save</Button>
                    )}
                    <LogOutButton />
                </CardFooter>
            </Form>
        </Card>
    )
}
