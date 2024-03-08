import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { toast } from 'sonner'

export default function Home() {
    return (
        <div>
            <Card className="h-20 w-1/2">
                <CardTitle>Billing Time Log</CardTitle>
            </Card>
        </div>
    )
}
