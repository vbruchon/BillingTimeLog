import { Card } from '@/components/ui/card'
import { Euro } from 'lucide-react'
import { CardStats } from '@/components/features/statistiques/CardStats'
import {
    getTotalRevenue,
    getTotalRevenueForCurrentYear,
    getTotalRevenueForCurrentMonth,
} from '../../../../app/admin/dashboard/hours/hourEntry.query'

export type RevenueStatsProps = {
    userId: string
}

export const RevenueStats = async () => {
    const revenueTotal = await getTotalRevenue()
    const revenueCurrentYear = await getTotalRevenueForCurrentYear()
    const revenueCurrentMonth = await getTotalRevenueForCurrentMonth()

    return (
        <Card className="flex flex-wrap items-center gap-4 bg-gray-800 p-4">
            <CardStats
                icon={<Euro />}
                value={Number(revenueTotal)}
                indicator="Revenue Total"
            />
            <CardStats
                icon={<Euro />}
                value={Number(revenueCurrentYear)}
                indicator="Revenue CurrentYear"
            />
            <CardStats
                icon={<Euro />}
                value={Number(revenueCurrentMonth)}
                indicator="Revenue CurrentMonth"
            />
        </Card>
    )
}
