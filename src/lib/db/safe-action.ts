import { createSafeActionClient } from 'next-safe-action'
import { getAuthSession, getRequiredAuthSession } from '../auth'

export const action = createSafeActionClient()

export const authentifiedAction = createSafeActionClient({
    middleware: async () => {
        const session = await getAuthSession()
        const user = session?.user
        const userId = user?.id

        if (!session) {
            throw new Error('You must be logged in to perform this action')
        }

        return {
            user,
            userId,
        }
    },
})
