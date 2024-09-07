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

const formSchema = z.object({
  password: z.string()
})

type Props = {
    onLoginButton: (password: string) => void
    disabled: boolean
}

export const LoginForm = ({ onLoginButton, disabled } : Props ) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: ""
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        const { password } = data
        onLoginButton(password)
        form.reset({ password: "" })
    }

    return (

        <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">

                <FormField

                    control={form.control}
                    name="password"
                    render={({ field }) => (

                        <FormItem>

                            <FormLabel>Senha</FormLabel>

                            <FormControl>
                                <Input 
                                    autoFocus 
                                    type="password"
                                    placeholder="Digite a senha" {...field} 
                                    disabled={disabled}
                                />
                            </FormControl>
                            
                            <FormMessage />

                        </FormItem>

                    )}
                />

                <Button 
                    type="submit"
                    disabled={disabled}
                >
                    <CircleUserRound className="mr-1" /> Entrar
                </Button>

            </form>

      </Form>

    )

}