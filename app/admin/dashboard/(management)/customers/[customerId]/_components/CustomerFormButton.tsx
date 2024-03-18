import { Button } from '@/components/ui/button'

export type CustomerFormButtonProps = {
    text: string
}

export const CustomerFormButton = ({ text }: CustomerFormButtonProps) => {
    return (
        <div className="absolute bottom-0 right-5">
            <Button type="submit" className="text-foreground">
                {text}
            </Button>
        </div>
    )
}
