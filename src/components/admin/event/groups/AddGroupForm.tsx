import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Save } from "lucide-react"
import * as api from "@/api/admin"
import { useState } from "react"
import { useDisplayAlertToast } from "@/hooks/useDisplayAlertToast"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import { Event } from "@/types/Event"

const formSchema = z.object({
    name: z.string().min(1, "O nome não pode estar vazio"),
})

type Props = {
    event: Event,
    refreshGroups: () => void
}

export const AddGroupForm = ({ event, refreshGroups } : Props ) => {

    const [ loading, setLoading ] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ""
        },
    })
    
    const createGroup = async (eventId: number, data: api.AddGroupData) => {
        
        try {
            const createdGroup = await api.addGroup(eventId, data)

            useDisplayAlertToast(
                ( createdGroup ? true : false ),
                "Grupo criado com sucesso.",
                "O novo grupo foi criado com sucesso!"
            )

            createdGroup && refreshGroups()

        } catch (error) {
            useDisplayAlertToast(false)
        }
        
	}

    const handleCreateGroup = async (data: api.AddGroupData) => {
        setLoading(true)
		await createGroup(event.id, data)
		setLoading(false)
    }

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        handleCreateGroup(data)
        form.reset()
    }

    return (

        <Card>

            <CardHeader>
                <CardDescription>
                    Preencha os campos para criar um novo grupo.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-2">
                <Form {...form}>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">

                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (

                                <FormItem>

                                    <FormLabel>Nome</FormLabel>

                                    <FormControl>
                                        <Input
                                            className="min-h-12"
                                            placeholder="Informe o nome do grupo" {...field} 
                                            disabled={loading}
                                        />
                                    </FormControl>
                                    
                                    <FormMessage />

                                </FormItem>

                            )}
                        />

                        <Button 
                            className="h-10 gap-1 w-full" 
                            type="submit"
                            disabled={loading} >
                            <Save className="h-3.5 w-3.5" />
                            <span className="sr-only 
                                sm:not-sr-only sm:whitespace-nowrap">
                                Criar
                            </span>
                        </Button>

                    </form>

                </Form>
            </CardContent>

        </Card>

    )

}