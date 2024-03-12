import { EditableField, EditableFieldProps } from './EditableField'

export type UserInfoItemProps = {
    icon: JSX.Element
    label?: string
    value: string | null
    secondValue?: string | null
    fieldName: EditableFieldProps['fieldName']
    className: string
    form: EditableFieldProps['form']
}

export const UserInfoItem = ({
    icon,
    label,
    value,
    secondValue,
    fieldName,
    form,
    className,
}: UserInfoItemProps) => {
    return (
        <div className="flex items-center gap-2 text-lg">
            {icon}
            <span>{label && <>{label} :</>}</span>
            <div className="flex flex-col">
                <EditableField
                    initialValue={value}
                    fieldName={fieldName}
                    form={form}
                    className={className}
                    textClassName="ml-0"
                />

                {secondValue && (
                    <EditableField
                        initialValue={secondValue}
                        fieldName="country"
                        form={form}
                        className="mt-2 w-2/5"
                        textClassName="ml-0"
                    />
                )}
            </div>
        </div>
    )
}
