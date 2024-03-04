import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const CustomerFormCompanyInfo = ({ form }: any) => {
    return (
        <div className="mt-20">
            <FormLabel className="mb-2 block text-xl">
                Company Information
            </FormLabel>
            <div className="my-6 flex flex-wrap gap-8">
                <div className="flex w-full gap-6">
                    <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                            <FormItem className="w-1/3">
                                <FormLabel className="text-xl">
                                    Company name
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="VBCODE" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="SIRET"
                        render={({ field }) => (
                            <FormItem className="w-1/3">
                                <FormLabel className="text-xl">
                                    SIRET number
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="8526541500036"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="VATNumber"
                        render={({ field }) => (
                            <FormItem className="w-1/3">
                                <FormLabel className="text-xl">
                                    V.A.T number
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="0123456789012345"
                                        value={field.value ?? ''}
                                        onChange={field.onChange}
                                        onBlur={field.onBlur}
                                        name={field.name}
                                        ref={field.ref}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex w-full gap-4">
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem className="w-1/3">
                                <FormLabel className="text-xl">
                                    Adress
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="18 rue Mozart"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem className="w-1/3">
                                <FormLabel className="text-xl">
                                    Country
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="France" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="webSite"
                    render={({ field }) => (
                        <FormItem className="w-1/3">
                            <FormLabel className="text-xl">WebSite</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="https:/billing-time-log.fr"
                                    value={field.value ?? ''}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    name={field.name}
                                    ref={field.ref}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </div>
    )
}
