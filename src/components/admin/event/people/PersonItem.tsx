import { useDisplayAlertToast } from "@/hooks/useDisplayAlertToast"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PersonComplete } from "@/types/PersonComplete"
import * as api from "@/api/admin"
import { Group } from "@/types/Group"
import { Event } from "@/types/Event"
import { Button } from "@/components/ui/button"
import { PencilRuler, Trash } from "lucide-react"
import { useState } from "react"
import { EditPersonForm } from "./EditPersonForm"

type Props = {
    person: PersonComplete
    event: Event
    group: Group
    refreshPeople: () => void
}

export const PersonItem = ({ person, event, group, refreshPeople } : Props ) => {

    const [ isEditing, setIsEditing ] = useState(false)

    const deletePerson = async () => {
    
        try {
            const isSuccess = await api.deletePerson(event.id, person.id, group.id)
            useDisplayAlertToast(
                isSuccess,
                "Pessoa excluída com sucesso.",
                "Houve um problema ao excluir a pessoa, tente novamente mais tarde."
            )
        } catch (error) {
            useDisplayAlertToast(false)
        } finally {
            refreshPeople()
        }

    }

    return (

        <div className="flex flex-col gap-3">

            <Card>

                <div className="flex w-full">

                    <div className="w-full">

                        <CardHeader>
                            <CardTitle className="text-sm" >{person.name}</CardTitle>
                            <CardDescription>
                                <p>CPF: { person.cpf }</p>
                                <p>Id: { person.id }</p>
                            </CardDescription>
                        </CardHeader>

                    </div>
                    
                    <CardContent className="flex items-center pb-0 pl-6 m-0 gap-2 flex-1">

                        <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                            onClick={ () => setIsEditing(!isEditing)}
                        >   <PencilRuler className="h-4 w-4" />
                        </Button>

                        <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                            onClick={ () => deletePerson()}
                        >   <Trash className="h-4 w-4" />
                        </Button>

                    </CardContent>
                    
                </div>


            </Card>

            { isEditing &&
                <CardFooter className="p-1" >
                    <EditPersonForm 
                        event={event} 
                        group={group} 
                        person={person}
                        refreshPeople={refreshPeople}
                    />
                </CardFooter>
            }

        </div>

        
    )

}