import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export type CardStatsProps = {
    icon: JSX.Element
    value: number
    indicator: string
    percentage?: boolean
    plusSign?: boolean
    percentageValue?: string
    className?: string
}

export const CardStats = ({
    icon,
    value,
    indicator,
    percentage = false,
    plusSign = false,
    percentageValue,
    className = '',
}: CardStatsProps) => {
    return (
        <Card className="flex items-center justify-center rounded-md p-6">
            <div className="flex items-center gap-x-2">
                {icon}
                <div className={cn('text-2xl font-bold', className)}>
                    {plusSign && '+'}
                    {value}
                    {percentage && ' %'}
                </div>
            </div>
            <div className={cn(className, 'p-6 text-sm uppercase')}>
                {indicator}
            </div>
            {plusSign && <p className="text-success">+{percentageValue}%</p>}
        </Card>
    )
}
