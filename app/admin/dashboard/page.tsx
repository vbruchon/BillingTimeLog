import { SearchBar } from '@/components/layout/dashboard/SearchBar'
import React from 'react'

function DashboardPage() {
    return (
        <>
            <SearchBar />
            <div className="h-[92%] rounded-lg bg-red-800 p-4">
                DashboardPage
            </div>
        </>
    )
}

export default DashboardPage
