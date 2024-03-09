import {
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'
import { ChevronFirst, ChevronLast } from 'lucide-react'

export type PaginationNavProps = {
    baseUrl: string
    page: number
    isNext?: boolean
    lastPage?: number
}

export const PaginationNav = ({
    baseUrl,
    page,
    isNext = false,
    lastPage,
}: PaginationNavProps) => {
    return (
        <>
            <PaginationItem>
                {isNext ? (
                    <PaginationLink href={`${baseUrl}?page=${lastPage} `}>
                        <ChevronLast size={16} />
                    </PaginationLink>
                ) : (
                    <PaginationLink href={`${baseUrl} `}>
                        <ChevronFirst size={16} />
                    </PaginationLink>
                )}
            </PaginationItem>
            <PaginationItem>
                {isNext ? (
                    <PaginationNext href={`${baseUrl}?page=${page + 1}`} />
                ) : (
                    <PaginationPrevious href={`${baseUrl}?page=${page - 1}`} />
                )}
            </PaginationItem>
        </>
    )
}
