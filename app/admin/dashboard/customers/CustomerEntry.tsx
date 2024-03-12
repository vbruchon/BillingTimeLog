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
                    <AvatarFallback>
                        {item.logo ? item.logo[0] : 'logo'}
                    </AvatarFallback>
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
