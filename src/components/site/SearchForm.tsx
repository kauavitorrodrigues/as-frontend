"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../ui/button"
import { Form, 
    FormControl, 
    FormField, 
    FormItem, FormLabel, 
    FormMessage 
} from "../ui/form"
import { Input } from "../ui/input"
import { CircleUserRound } from "lucide-react"
import { escapeCpf } from "@/utils/escapeCpf"

const formSchema = z.object({
  cpf: z.string()
  .min(11, { message: "CPF deve ter 11 caracteres" })
  .max(14, { message: "CPF deve ter no máximo 14 caracteres" }),
})

type Props = {
    onSearchButton: (cpf: string) => void
}

export const SearchForm = ({ onSearchButton } : Props ) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          cpf: ""
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        const { cpf } = data
        onSearchButton(escapeCpf(cpf))
    }

    return (

        <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <FormField

                    control={form.control}
                    name="cpf"
                    render={({ field }) => (

                        <FormItem>

                            <FormLabel>CPF</FormLabel>

                            <FormControl>
                                <Input placeholder="CPF" {...field} />
                            </FormControl>
                            
                            <FormMessage />

                        </FormItem>

                    )}
                />

                <Button type="submit">
                    <CircleUserRound className="mr-1" /> Entrar
                </Button>

            </form>

      </Form>

    )

}