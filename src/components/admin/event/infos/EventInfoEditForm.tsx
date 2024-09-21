"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Save } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import * as api from "@/api/admin"
import { useState } from "react"
import { useDisplayAlertToast } from "@/hooks/useDisplayAlertToast"
import { useEvents } from "@/contexts/eventsContext"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Event } from "@/types/Event"

const formSchema = z.object({
    title: z.string().min(1, "O título não pode estar vazio"),
    description: z.string().min(1, "A descrição não pode estar vazia"),
    grouped: z.boolean(),
    active: z.boolean()
})

type Props = {
    event: Event
}

export const EventInfoEditForm = ({ event } : Props ) => {

    const [ loading, setLoading ] = useState(false)
    const { fetchEvents } = useEvents()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: event.title,
            description: event.description,
            grouped: event.grouped,
            active: event.status
        },
    })
    
    const updateEvent = async (id: number, data: api.UpdateEventData) => {
        
        try {
            const isSuccess = await api.updateEvent(id, data)

            useDisplayAlertToast(
                isSuccess,
                "Evento atualizado com sucesso.",
                "Houve um problema ao editar o evento, tente novamente mais tarde."
            )

            isSuccess && fetchEvents()

        } catch (error) {
            useDisplayAlertToast(false)
        }
        
	}

    const handleUpdateEvent = async (data: api.UpdateEventData) => {
        setLoading(true)
		await updateEvent(event.id, data)
		setLoading(false)
    }

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        handleUpdateEvent(data)
        form.reset()
    }

    return (

        <Card>

            <CardHeader>

                <CardTitle>Informações</CardTitle>
                <CardDescription>
                    Atualize as informações gerais do evento.
                </CardDescription>
                
            </CardHeader>

            <CardContent className="space-y-2">            
                <Form {...form}>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">

                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (

                                <FormItem>

                                    <FormLabel>Título</FormLabel>

                                    <FormControl>
                                        <Input
                                            className="min-h-12"
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
                                            className="min-h-12" 
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

                        <FormField
                            control={form.control}
                            name="active"
                            render={({ field }) => (

                                <FormItem>

                                    <div className="flex items-center gap-3" >

                                        <FormLabel>Ativo</FormLabel>

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
                            <Save className="h-3.5 w-3.5" />
                            <span className="sr-only 
                                sm:not-sr-only sm:whitespace-nowrap">
                                Salvar
                            </span>
                        </Button>

                    </form>

                </Form>
            </CardContent>

        </Card>

    )

}