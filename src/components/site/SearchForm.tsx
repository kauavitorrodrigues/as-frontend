import { useForm } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"

type Props = {
    onSearchButton: (cpf: string) => void
}

export const SearchForm = ({onSearchButton}: Props) => {

    const form = useForm()

    return (

        <FormField

            control={form.control}
            name="username"
            render={({ field }) => (
            <FormItem>

                <FormLabel>Username</FormLabel>

                <FormControl>
                    <Input placeholder="shadcn" {...field} />
                </FormControl>

                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />

            </FormItem>
            )}

        />
        
    )

}