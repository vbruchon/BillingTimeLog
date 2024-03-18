import { CustomerItem } from '@/components/layout/dashboard/projects/CustomerItem'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { ProjectFormProps } from './ProjectForm'

export type ProjectFormSelectCustomerProps = {
    form: any
    projectCustomer:
        | {
              id: string
              companyName: string
              email: string
              logo: string | null
          }
        | null
        | undefined
    otherCustomers:
        | {
              id: string
              companyName: string
              email: string
              logo: string | null
          }[]
        | null
        | undefined
}

export const ProjectFormSelectCustomer = ({
    form,
    defaultValue,
    projectCustomer,
    customers,
    otherCustomers,
}: ProjectFormSelectCustomerProps & ProjectFormProps) => {
    return (
        <FormField
            control={form.control}
            name="customerId"
            render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                    <FormLabel className="mb-1 text-lg">Customer</FormLabel>
                    <FormControl>
                        <Select
                            onValueChange={(value) => {
                                field.onChange(value)
                            }}
                        >
                            <SelectTrigger className="h-auto w-[460px] p-4">
                                <SelectValue
                                    placeholder={
                                        defaultValue ? (
                                            <CustomerItem
                                                logo={
                                                    projectCustomer?.logo ?? ''
                                                }
                                                companyName={
                                                    projectCustomer?.companyName
                                                }
                                            />
                                        ) : (
                                            'Choose a customer'
                                        )
                                    }
                                    {...field}
                                    className="rounded-md border p-6"
                                />
                            </SelectTrigger>

                            <SelectContent className="mt-1">
                                {defaultValue
                                    ? otherCustomers?.map((customer, index) => (
                                          <SelectItem
                                              key={index}
                                              value={customer.id}
                                              className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                                          >
                                              <CustomerItem
                                                  logo={customer.logo ?? ''}
                                                  companyName={
                                                      customer.companyName
                                                  }
                                              />
                                          </SelectItem>
                                      ))
                                    : customers.map((customer, index) => (
                                          <SelectItem
                                              key={index}
                                              value={customer.id}
                                              className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                                          >
                                              <CustomerItem
                                                  logo={customer.logo ?? ''}
                                                  companyName={
                                                      customer.companyName
                                                  }
                                              />
                                          </SelectItem>
                                      ))}
                            </SelectContent>
                        </Select>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
