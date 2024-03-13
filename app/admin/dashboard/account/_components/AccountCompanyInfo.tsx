import { Clipboard, FileText, Package } from 'lucide-react'
import { UserInfoItem } from './userInfoItem'
import { EditableFieldProps } from './EditableField'
import { Typography } from '@/components/ui/Typography'
import { AccountFormSchema } from '../account.schema'
import { AccountAddressInfo } from './AccountAddressInfo'

export type AccountCompanyInfoProps = {
    user: AccountFormSchema
    form: EditableFieldProps['form']
}

export const AccountCompanyInfo = ({ user, form }: AccountCompanyInfoProps) => {
    return (
        <>
            <Typography
                variant={'h3'}
                className="mb-4 text-lg text-muted-foreground"
            >
                Company Informations
            </Typography>
            <AccountAddressInfo user={user} form={form} />
            <UserInfoItem
                icon={<Package size={26} />}
                label="N° Siret"
                value={user.SIRET}
                form={form}
                fieldName="SIRET"
                className="mb-4"
            />
            <UserInfoItem
                icon={<Clipboard size={26} />}
                label="Activity Code"
                value={user.activityCode}
                form={form}
                fieldName="activityCode"
                className="mb-4"
            />
            <UserInfoItem
                icon={<FileText size={26} />}
                label="N° TVA"
                value={user.VATNumber}
                form={form}
                fieldName="VATNumber"
                className=""
            />
        </>
    )
}
