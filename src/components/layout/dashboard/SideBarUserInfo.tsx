import { Typography } from '@/components/ui/Typography'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SideBarProps } from './SideBar'

export type SideBarUserInfoProps = {
    user?: SideBarProps['user']
    customer?: SideBarProps['customer']
}

export const SideBarUserInfo = ({ user, customer }: SideBarUserInfoProps) => {
    return (
        <div className="my-6 flex flex-col items-center gap-4">
            <Avatar className=" size-28 ">
                <AvatarFallback>Logo</AvatarFallback>
                <AvatarImage src={user?.image ?? customer?.logo ?? ''} />
            </Avatar>
            <Typography variant={'large'} className="text-foreground">
                {user?.companyName ?? customer?.companyName}
            </Typography>
        </div>
    )
}
