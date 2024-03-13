import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Card, CardTitle } from '@/components/ui/card'

export default function Home() {
    return (
        <>
            <Header />
            <div>
                <Card className="h-20 w-1/2">
                    <CardTitle>Billing Time Log</CardTitle>
                </Card>
            </div>{' '}
            <Footer />
        </>
    )
}
