"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import * as api from "@/api/admin"
import { useState } from "react"
import { useDisplayAlertToast } from "@/hooks/useDisplayAlertToast"
import { useEvents } from "@/contexts/eventsContext"

const formSchema = z.object({
    tittle: z.string().min(1, "O título não pode estar vazio"),
    description: z.string().min(1, "A descrição não pode estar vazia"),
    grouped: z.boolean()
})

export const EventCreateForm = () => {

    const [ loading, setLoading ] = useState(false)
    const { fetchEvents } = useEvents()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            tittle: "",
            description: "",
            grouped: false
        },
    })
    
    const createEvent = async (data: api.AddEventData) => {
        
        try {
            const isSuccess = await api.createEvent(data)

            useDisplayAlertToast(
                isSuccess,
                "Evento criado com sucesso.",
                "Houve um problema ao criar o evento, tente novamente mais tarde."
            )

            isSuccess && fetchEvents()

        } catch (error) {
            useDisplayAlertToast(false)
        }
        
	}

    const handleCreateEvent = async (data: api.AddEventData) => {
        setLoading(true)
		await createEvent(data)
		setLoading(false)
    }

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        handleCreateEvent(data)
        form.reset()
    }

    return (

        <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">

                <FormField
                    control={form.control}
                    name="tittle"
                    render={({ field }) => (

                        <FormItem>

                            <FormLabel>Título</FormLabel>

                            <FormControl>
                                <Input 
                                    autoFocus 
                                    placeholder="Informe o título" {...field} 
                                    disabled={loading}
                                />
                            </FormControl>
                            
                            <FormMessage />

                        </FormItem>

                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (

                        <FormItem>

                            <FormLabel>Descrição</FormLabel>

                            <FormControl>
                                <Input 
                                    autoFocus 
                                    placeholder="Informe a descrição" {...field} 
                                    disabled={loading}
                                />
                            </FormControl>
                            
                            <FormMessage />

                        </FormItem>

                    )}
                />

                <FormField
                    control={form.control}
                    name="grouped"
                    render={({ field }) => (

                        <FormItem>

                            <div className="flex items-center gap-3" >

                                <FormLabel>Agrupado</FormLabel>

                                <FormControl>
                                    <Switch 
                                        id="airplane-mode" 
                                        checked={field.value} 
                                        onCheckedChange={field.onChange}
                                        disabled={loading} 
                                    />
                                </FormControl>

                            </div>
                            
                            <FormMessage />

                        </FormItem>

                    )}
                />

                <Button className="h-10 gap-1 w-full" type="submit">
                    <Check className="h-3.5 w-3.5" />
                    <span className="sr-only 
                        sm:not-sr-only sm:whitespace-nowrap">
                        Criar
                    </span>
                </Button>

            </form>

      </Form>

    )

}