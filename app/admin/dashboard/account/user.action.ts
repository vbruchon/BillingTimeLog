'use server'
import { z } from 'zod'
import { AccountFormSchema } from './account.schema'
import { authentifiedAction } from '@/lib/db/safe-action'

const UserActionEditProps = z.object({
    data: AccountFormSchema,
})

export const userActionEdit = authentifiedAction(
    UserActionEditProps,
    async (props, { userId }) => {
        const updatedUser = await prisma.user.update({
            where: {
                id: userId,
            },
            data: props.data,
        })

        return { message: 'User update successful!', updatedUser }
    }
)
