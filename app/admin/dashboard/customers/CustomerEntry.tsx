import { Pencil } from 'lucide-react'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import { DeleteButtonWithConfirmation } from '@/components/layout/dashboard/button/DeleteButtonWithConfirmation'
import { deleteProject } from '../projects/[projectId]/project.action'
import { ActionButton } from '@/components/layout/dashboard/button/ActionButton'
import { deleteCustomer } from './customers.action'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export type CustomerEntryProps = {
    item: {
        id: string
        companyName: string
        email: string
        logo: string
    }
    index: number
}

export const CustomerEntry = ({ item, index }: CustomerEntryProps) => {
    return (
        <TableRow key={item.companyName}>
            <TableCell className="font-medium">
                <Avatar className=" size-16">
                    <AvatarFallback>{item.logo[0]}</AvatarFallback>
                    <AvatarImage
                        src={item.logo}
                        alt={`${item.companyName}'s logo`}
                    />
                </Avatar>
            </TableCell>
            <TableCell className="text-lg">
                <Link
                    href="/admin/dashboard/customers/[customerId]"
                    as={`/admin/dashboard/customers/${item.id}`}
                >
                    {item.companyName}
                </Link>
            </TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell className="flex items-center justify-end gap-x-4">
                <ActionButton
                    id={item.id}
                    element="customer"
                    editLink={`/admin/dashboard/customers/${item.id}`}
                    deleteItem={deleteCustomer}
                />
            </TableCell>
        </TableRow>
    )
}

/* 
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import { ActionButton } from '@/components/layout/dashboard/button/ActionButton'
import { deleteCustomer } from './customers.action'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export type CustomerEntryProps = {
    customer: {
        id: string
        companyName: string
        email: string
        logo: string
    }
}

export const CustomerEntry = ({ customer }: CustomerEntryProps) => {
    console.log({ customer })

    return (
        <TableRow key={customer.companyName}>
            <TableCell className="font-medium">
                <Avatar>
                    <AvatarFallback>logo</AvatarFallback>
                    <AvatarImage
                        src={customer.logo}
                        alt={`${customer.companyName}'s logo`}
                    />
                </Avatar>
            </TableCell>
            <TableCell className="text-lg">
                <Link
                    href="/admin/dashboard/customers/[customerId]"
                    as={`/admin/dashboard/customers/${customer.id}`}
                >
                    {customer.companyName}
                </Link>
            </TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell className="flex items-center justify-end gap-x-4">
                <ActionButton
                    id={customer.id}
                    element="customer"
                    editLink={`/admin/dashboard/customers/${customer.id}`}
                    deleteItem={deleteCustomer}
                />
            </TableCell>
        </TableRow>
    )
}


*/
