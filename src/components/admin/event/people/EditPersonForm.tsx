import { z } from "zod"
import * as api from "@/api/admin"
import { Event } from "@/types/Event"
import { Group } from "@/types/Group"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent } from "@/components/ui/card"
import { useDisplayAlertToast } from "@/hooks/useDisplayAlertToast"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Save } from "lucide-react"
import { PersonComplete } from "@/types/PersonComplete"
import { escapeCpf } from "@/utils/escapeCpf"

type Props = {
    event: Event 
    group: Group 
    person: PersonComplete
    refreshPeople: () => void
}

const formSchema = z.object({
    name: z.string().min(2, "O nome deve ter no mínimo 2 caracteres"),
    cpf: z.string()
    .min(11, { message: "CPF deve ter 11 caracteres" })
    .max(11, { message: "CPF deve ter no máximo 11 caracteres" }),
})


export const EditPersonForm = ({ event, person, group, refreshPeople } : Props ) => {

    const [ loading, setLoading ] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { 
            name: person.name,
            cpf: escapeCpf(person.cpf)
        }
    })

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const escapedValue = escapeCpf(e.target.value); 
        form.setValue('cpf', escapedValue);
    }
    
    const updatePerson = async (data: api.UpdatePersonData) => {

        try {
            const updatePerson = await api.updatePerson(event.id, group.id, person.id, data)

            useDisplayAlertToast(
                ( updatePerson ? true : false ),
                "Pessoa atualizada com sucesso.",
                "Sucesso ao atualizar as informações da pessoa!"
            )

            updatePerson && refreshPeople()

        } catch (error) {
            useDisplayAlertToast(false)
        }
        
	}

    const handleUpdatePerson = async (data: api.AddGroupData) => {
        setLoading(true)
		await updatePerson(data)
		setLoading(false)
    }

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        handleUpdatePerson(data)
    }

    return (
        <Card className="pt-6 w-full">

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
                                            placeholder="Informe o novo nome da pessoa" {...field} 
                                            disabled={loading || !person}
                                        />
                                    </FormControl>
                                    
                                    <FormMessage />

                                </FormItem>

                            )}
                        />

                        <FormField
                            control={form.control}
                            name="cpf"
                            render={({ field }) => (

                                <FormItem>

                                    <FormLabel>CPF</FormLabel>

                                    <FormControl>
                                        <Input
                                            className="min-h-12"
                                            placeholder="Informe o novo cpf da pessoa" {...field} 
                                            maxLength={11}
                                            onChange={handleCpfChange}
                                            disabled={loading || !person}
                                        />
                                    </FormControl>
                                    
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