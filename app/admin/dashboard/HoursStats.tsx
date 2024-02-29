import { Card } from '@/components/ui/card'
import { Coins, Euro, Timer } from 'lucide-react'
import {
    getCountOfHoursEntry,
    getCountOfHoursByInvoiceStatus,
    getAverageDurationByInvoiceStatus,
    getTotalRevenue,
} from './hours/hourEntry.query'
import { CardStats } from '@/components/features/statistiques/CardStats'

export const HoursStats = async () => {
    const hours = await getCountOfHoursEntry()
    const totalHoursPaid = await getCountOfHoursByInvoiceStatus('Paid')
    const totalHoursPending = await getCountOfHoursByInvoiceStatus('Pending')
    const totalHoursOverdue = await getCountOfHoursByInvoiceStatus('Overdue')
    const totalHoursBilling =
        totalHoursPaid + totalHoursPending + totalHoursOverdue
    const averageHours = await getAverageDurationByInvoiceStatus('not_billing')

    return (
        <Card className="flex flex-wrap items-center gap-4 bg-gray-800 p-4">
            <CardStats
                icon={<Timer />}
                value={hours}
                indicator="Heures effectué"
            />
            <CardStats
                icon={<Timer />}
                value={totalHoursBilling}
                indicator="Heures facturées"
            />
            <CardStats
                icon={<Coins color="#43b812" size={32} />}
                value={totalHoursPaid}
                indicator="Heures payé"
                className="text-[#43b812]"
            />
            <CardStats
                icon={<Coins color="#ff7800" size={32} />}
                value={totalHoursPending}
                indicator="Heures en attente de paiements"
                className="text-[#ff7800]"
            />

            <CardStats
                icon={<Coins color="#e01b24" size={32} />}
                value={totalHoursOverdue}
                indicator="Heures en retard de paiements"
                className="text-[#e01b24]"
            />
            <CardStats
                icon={<Timer />}
                value={averageHours}
                indicator="Moyenne d'heures par projets"
            />
        </Card>
    )
}
