import { AccountCompanyInfoProps } from './AccountCompanyInfo'
import { EditableField } from './EditableField'
import { EditableImageField } from './EditableImageField'

export const AccountGeneralInfo = ({ user, form }: AccountCompanyInfoProps) => {
    return (
        <>
            <EditableImageField form={form} fieldName="image" />
            <EditableField
                initialValue={user.companyName}
                fieldName="companyName"
                form={form}
                className="!mt-12"
                textClassName="text-xl text-bold mx-auto"
            />
            <EditableField
                initialValue={user.email}
                fieldName="email"
                form={form}
                textClassName="text-base text-bold mx-auto"
            />
        </>
    )
}
