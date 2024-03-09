import { PaginationItem, PaginationLink } from '@/components/ui/pagination'

export type CustomPaginationLinkProps = {
    baseUrl: string
    index?: number
    page: number
}

export const CustomPaginationLink = ({
    baseUrl,
    index,
    page,
}: CustomPaginationLinkProps) => {
    return (
        <PaginationItem>
            <PaginationLink
                href={`${baseUrl}?page=${index ?? page}`}
                isActive={page === index}
            >
                {index !== undefined ? index : page}
            </PaginationLink>
        </PaginationItem>
    )
}
