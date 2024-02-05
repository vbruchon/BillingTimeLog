import { SideBar } from '@/components/layout/dashboard/SideBar'
import { PropsWithChildren } from 'react'

const LayoutDashboard = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex h-screen">
            <SideBar />
            <div className="mx-4 mt-4 flex-1 overflow-auto rounded-lg bg-primary-foreground p-4">
                {children}
            </div>
        </div>
    )
}

export default LayoutDashboard
