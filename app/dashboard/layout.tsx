import { SearchBar } from '@/components/features/layout/dashboard/SearchBar'
import { SideBar } from '@/components/features/layout/dashboard/SideBar'
import { PropsWithChildren } from 'react'

const LayoutDashboard = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex h-screen">
            <SideBar />
            <div className="mx-4 mt-4 flex-1 rounded-lg bg-primary-foreground p-4">
                {children}
            </div>
        </div>
    )
}

export default LayoutDashboard
