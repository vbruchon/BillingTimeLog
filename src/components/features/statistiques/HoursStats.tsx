import { Card } from '@/components/ui/card'
import { Coins, Euro, Timer } from 'lucide-react'
import {
    getCountOfHoursEntry,
    getCountOfHoursByInvoiceStatus,
    getAverageDurationByInvoiceStatus,
    getTotalRevenue,
} from '../../../../app/admin/dashboard/(management)/hours/hourEntry.query'
import { CardStats } from '@/components/features/statistiques/CardStats'

export const HoursStats = async () => {
    const hours = await getCountOfHoursEntry()
    const totalHoursUnBilled = await getCountOfHoursByInvoiceStatus('unbilled')
    const totalHoursBilled = await getCountOfHoursByInvoiceStatus('billed')
    return (
        <div className="flex flex-wrap items-center gap-4 p-4">
            <CardStats
                icon={<Timer />}
                value={hours}
                indicator="Heures effectué"
            />
            <CardStats
                icon={<Timer />}
                value={totalHoursUnBilled}
                indicator="Heures non facturées"
            />
            <CardStats
                icon={<Coins color="#43b812" size={32} />}
                value={totalHoursBilled}
                indicator="Heures facturés"
                className="text-[#43b812]"
            />
        </div>
    )
}
