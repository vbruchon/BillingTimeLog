import {
    FormLabel,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const CustomerFormContactInfo = ({ form }: any) => {
    return (
        <div className="mt-12">
            <FormLabel className="mb-2 block text-xl">
                Contact Information
            </FormLabel>
            <div className="my-6 flex flex-wrap gap-8">
                <div className="flex w-full gap-6">
                    <FormField
                        control={form.control}
                        name="tel"
                        render={({ field }) => (
                            <FormItem className="w-1/3">
                                <FormLabel className="text-xl">
                                    Phone Number
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="0606070507"
                                        {...field}
                                        value={field.value ?? ''}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-1/3">
                                <FormLabel className="text-xl">Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="example@email.fr"
                                        {...field}
                                        value={field.value ?? ''}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                            <FormItem className="w-1/3">
                                <FormLabel className="text-xl">
                                    Contact Name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Dupont"
                                        {...field}
                                        value={field.value ?? ''}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="contactFirstName"
                        render={({ field }) => (
                            <FormItem className="w-1/3">
                                <FormLabel className="text-xl">
                                    Contact LastName
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Jean"
                                        {...field}
                                        value={field.value ?? ''}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}
