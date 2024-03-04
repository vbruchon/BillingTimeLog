import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export type CustomerItemProps = {
    logo?: string
    companyName?: string
}

export const CustomerItem = ({ logo, companyName }: CustomerItemProps) => {
    return (
        <div className="flex items-center gap-4">
            <Avatar className=" size-14 overflow-hidden rounded-full">
                <AvatarFallback>{logo ? logo[0] : 'f'}</AvatarFallback>
                <AvatarImage src={logo} className="size-full object-cover" />
            </Avatar>
            <p className="text-lg font-bold">{companyName}</p>
        </div>
    )
}
