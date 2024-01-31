import { SearchBar } from '@/components/features/layout/dashboard/SearchBar'
import { SideBar } from '@/components/features/layout/dashboard/SideBar'
import { PropsWithChildren } from 'react'

const LayoutDashboard = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex h-screen">
            <SideBar />
            <div className="mt-4 flex-1 bg-green-400 p-4">{children}</div>
        </div>
    )
}

export default LayoutDashboard
