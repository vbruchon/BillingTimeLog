import { MapPin } from 'lucide-react'
import { EditableField } from './EditableField'
import { FormLabel } from '@/components/ui/form'
import { AccountCompanyInfoProps } from './AccountCompanyInfo'

export const AccountAddressInfo = ({ user, form }: AccountCompanyInfoProps) => {
    return (
        <div className="mb-6 flex items-center">
            <FormLabel className="flex w-1/3 items-center gap-2 text-lg">
                <MapPin size={26} />
                Adress :
            </FormLabel>
            <div className="flex flex-col gap-2">
                <EditableField
                    initialValue={user.address}
                    form={form}
                    fieldName="address"
                    className=""
                />
                <div className="flex gap-x-20">
                    <EditableField
                        initialValue={user.zipCode}
                        form={form}
                        fieldName="zipCode"
                        className=""
                    />
                    <EditableField
                        initialValue={user.city}
                        form={form}
                        fieldName="city"
                        className=""
                    />
                </div>
                <EditableField
                    initialValue={user.country}
                    form={form}
                    fieldName="country"
                    className=""
                />
            </div>
        </div>
    )
}
