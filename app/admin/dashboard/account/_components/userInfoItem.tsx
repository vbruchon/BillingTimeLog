import { EditableField, EditableFieldProps } from './EditableField'

export type UserInfoItemProps = {
    icon?: JSX.Element
    label?: string
    value: string | null
    fieldName: EditableFieldProps['fieldName']
    className: string
    form: EditableFieldProps['form']
}

export const UserInfoItem = ({
    icon,
    label,
    value,
    fieldName,
    form,
    className,
}: UserInfoItemProps) => {
    return (
        <div className="flex items-center gap-2">
            <div className="flex w-1/3 items-center gap-2">
                {icon}
                <span>{label && <>{label}</>}</span>
            </div>
            <EditableField
                initialValue={value}
                fieldName={fieldName}
                form={form}
                className={`${className} mt-2`}
                textClassName=""
            />
        </div>
    )
}
