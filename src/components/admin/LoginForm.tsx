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
import { CircleUserRound, LoaderIcon } from "lucide-react"
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as api from "@/api/admin"
import { Card, CardContent } from "../ui/card"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  password: z.string().min(1, "A senha não pode estar vazia")
})

export const LoginForm = () => {

    const [ loading, setLoading ] = useState(false)
	const router = useRouter()

    const displayToastForLoginError = () => {
        toast({
            title: "Ops! Algo deu errado.",
            variant: "destructive",
            description: "Houve um problema ao realizar o login, verifique as credenciais e tente novamente.",
        });
    }

    const displayToastForRequestError = () => {
        toast({
            title: "Ops! Algo deu errado.",
            variant: "destructive",
            description: "Não foi possível realizar o login, tente novamente.",
        });
    }

	const authUser = async (password: string) => {

        try {
            let token = await api.login(password)
            if (!token) { 
                displayToastForLoginError() 
            } else {
                setCookie('token', token)
                router.push("/admin")
            } 
        } catch (error) {
            displayToastForRequestError()
        }

	}

	const handleLoginButton = async (password: string) => {
        setLoading(true)
		authUser(password)
		setLoading(false)
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: ""
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        const { password } = data
        handleLoginButton(password)
        form.reset({ password: "" })
    }

    return (

        <Card className="w-full max-w-md flex flex-col justify-center" >

            <CardContent className="flex flex-col items-center gap-6 p-6">

                { !loading &&  

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
                                                disabled={loading}
                                            />
                                        </FormControl>
                                        
                                        <FormMessage />

                                    </FormItem>

                                )}
                            />

                            <Button 
                                type="submit"
                                disabled={loading}
                            >
                                <CircleUserRound className="mr-1" /> Entrar
                            </Button>

                        </form>

                    </Form>

                }

                { loading && <LoaderIcon size={40} /> }

            </CardContent>
            
        </Card>

    )

}