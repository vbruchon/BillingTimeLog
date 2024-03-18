import { Card } from '@/components/ui/card'
import { UserPlus, Users } from 'lucide-react'
import {
    getCountNewCustomers,
    getCountofCustomers,
} from '../../../../app/admin/dashboard/(management)/customers/customers.query'
import { CardStats } from '@/components/features/statistiques/CardStats'
import { Typography } from '@/components/ui/Typography'

export type CustomerStatsProps = {
    userId: string
}

export const CustomerStats = async ({ userId }: CustomerStatsProps) => {
    const customersCount = await getCountofCustomers(userId)
    const [currentYearNewCustomers, percentageNewCustomers] =
        await getCountNewCustomers(userId)
    return (
        <div className="flex flex-wrap items-center gap-4 p-4">
            <CardStats
                icon={<Users size={32} />}
                value={customersCount}
                indicator="Total Customers"
            />
            <CardStats
                icon={<UserPlus color="#43b812" />}
                value={currentYearNewCustomers}
                indicator="New Customers by last year"
                plusSign={true}
                percentageValue={percentageNewCustomers}
                className="text-[#43b812]"
            />
        </div>
    )
}
