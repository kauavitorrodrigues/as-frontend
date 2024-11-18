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
import { Card, CardContent, CardDescription, CardHeader,
} from "@/components/ui/card"
import { Event } from "@/types/Event"
import { Group } from "@/types/Group"
import { escapeCpf } from "@/utils/escapeCpf"

const formSchema = z.object({
    name: z.string().min(2, "O nome deve ter no mínimo 2 caracteres"),
    cpf: z.string()
    .min(11, { message: "CPF deve ter 11 caracteres" })
    .max(11, { message: "CPF deve ter no máximo 11 caracteres" }),
})

type Props = {
    event: Event
    group: Group
    refreshPeople: () => void
}

export const AddPersonForm = ({ event, group, refreshPeople } : Props ) => {

    const [ loading, setLoading ] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            cpf: ""
        },
    })

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const escapedValue = escapeCpf(e.target.value); 
        form.setValue('cpf', escapedValue);
    }
    
    const createPerson = async (data: api.AddPersonData) => {
        
        try {
            const createdPerson = await api.addPerson(event.id, group.id, data)

            useDisplayAlertToast(
                ( createdPerson ? true : false ),
                "Pessoa criada com sucesso.",
                "Sucesso ao criar a pessoa!."
            )

            createdPerson && refreshPeople()

        } catch (error) {
            useDisplayAlertToast(false)
        }
	}

    const handleCreatePerson = async (data: api.AddPersonData) => {
        setLoading(true)
		await createPerson(data)
		setLoading(false)
    }

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        handleCreatePerson(data)
        form.reset()
    }

    return (

        <Card>

            <CardHeader>
                <CardDescription>
                    Preencha os campos para criar uma nova pessoa.
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
                                            placeholder="Informe o nome da pessoa" {...field} 
                                            disabled={loading}
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
                                            placeholder="Informe o CPF da pessoa" {...field} 
                                            maxLength={11}
                                            onChange={handleCpfChange}
                                            disabled={loading}
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
                                Criar
                            </span>
                        </Button>

                    </form>

                </Form>
                
            </CardContent>

        </Card>

    )

}