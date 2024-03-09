import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
} from '@/components/ui/pagination'
import { PaginationNav } from './PaginationNav'
import { CustomPaginationLink } from './CustomPaginationLink'

export type CustomPaginationProps = {
    totalPage: number
    page: number
    baseUrl: string
}

export const CustomPagination = ({
    totalPage,
    page,
    baseUrl,
}: CustomPaginationProps) => {
    const generatePageLinks = () => {
        const pages = []
        const displayPages = 3
        let startPage
        const lastPage = totalPage - 1

        if (totalPage > displayPages) {
            startPage = Math.max(
                1,
                Math.min(page - 1, totalPage - displayPages)
            )
        } else {
            startPage = 1
        }

        const endPage = Math.min(startPage + displayPages - 1, totalPage ?? 0)

        //Display before current and after page
        for (let i = startPage; i <= Math.min(endPage, totalPage - 1); i++) {
            pages.push(
                <CustomPaginationLink baseUrl={baseUrl} index={i} page={page} />
            )
        }

        //Display elips and lastPage
        if (totalPage - 1 > endPage) {
            pages.push(
                <PaginationItem key="ellipsis">
                    <PaginationEllipsis />
                </PaginationItem>
            )

            pages.push(
                <CustomPaginationLink baseUrl={baseUrl} page={lastPage} />
            )
        }

        return pages
    }

    return (
        <Pagination className="mt-4">
            <PaginationContent>
                {page > 1 && <PaginationNav baseUrl={baseUrl} page={page} />}
                {generatePageLinks()}
                {page !== totalPage - 1 && (
                    <PaginationNav
                        baseUrl={baseUrl}
                        page={page}
                        lastPage={totalPage - 1}
                        isNext
                    />
                )}
            </PaginationContent>
        </Pagination>
    )
}
