import { z } from "zod"
import * as api from "@/api/admin"
import { Event } from "@/types/Event"
import { Group } from "@/types/Group"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent } from "@/components/ui/card"
import { useDisplayAlertToast } from "@/hooks/useDisplayAlertToast"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Save } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(1, "O nome não pode estar vazio"),
})

type Props = { 
    event: Event, 
    group: Group,
    refreshGroups: () => void
}

export const EditGroupForm = ({ event, group, refreshGroups } : Props ) => {

    const [ loading, setLoading ] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: group.name || '' }
    })

    useEffect(() => {
        if (group) {
            form.reset({
                name: group.name,
            })
        }
    }, [group, form])
    
    const updateGroup = async (eventId: number, data: api.UpdateGroupData) => {

        try {
            const updatedGroup = await api.updateGroup(eventId, group.id, data)

            useDisplayAlertToast(
                ( updatedGroup ? true : false ),
                "Grupo atualizado com sucesso.",
                "Houve um problema ao atualizar o grupo, tente novamente mais tarde."
            )

            if (updatedGroup) refreshGroups()

        } catch (error) {
            useDisplayAlertToast(false)
        }
        
	}

    const handleUpdateGroup = async (data: api.AddGroupData) => {
        setLoading(true)
		await updateGroup(event.id, data)
		setLoading(false)
    }

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        handleUpdateGroup(data)
    }

    return (

        <Card className="pt-6 w-full" >

            <CardContent className="space-y-2 flex flex-col gap-4">

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
                                            disabled={loading || !group}
                                        />
                                    </FormControl>
                                    
                                    <FormMessage />

                                </FormItem>

                            )}
                        />

                        <Button 
                            className="h-10 gap-1 w-full" 
                            type="submit"
                            disabled={loading}>
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