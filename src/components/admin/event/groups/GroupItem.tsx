import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Group } from "@/types/Group"
import { useState } from "react"
import { EditGroupForm } from "./EditGroupForm"
import { Event } from "@/types/Event"
import { PencilRuler, Trash } from "lucide-react"
import * as api from "@/api/admin"
import { useDisplayAlertToast } from "@/hooks/useDisplayAlertToast"

type Props = {
    event: Event
    group: Group
    refreshGroups: () => void
}

export const GroupItem = ({ event, group, refreshGroups } : Props ) => {

    const [ editAction, setEditAction ] = useState(false)

    const deleteGroup = async () => {
        
        try {
            const isSuccess = await api.deleteGroup(event.id, group.id)
            useDisplayAlertToast(
                isSuccess,
                "Grupo excluído com sucesso.",
                "Houve um problema ao excluir o grupo, tente novamente mais tarde."
            )

            if (isSuccess) refreshGroups()

        } catch (error) {
            useDisplayAlertToast(false)
        }

    }

    return (

        <div className="flex flex-col gap-3">

            <Card>

                <div className="flex w-full">

                    <div className="w-full">

                        <CardHeader>
                            <CardTitle className="text-sm" >Grupo N° {group.id}</CardTitle>
                            <CardDescription>
                                Nome: { group.name }
                            </CardDescription>
                        </CardHeader>

                    </div>
                    
                    <CardContent className="flex items-center pb-0 pl-6 m-0 gap-2 ">

                        <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                            onClick={ () => setEditAction(!editAction)}
                        >   <PencilRuler className="h-4 w-4" />
                        </Button>

                        <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                            onClick={ () => deleteGroup()}
                        >   <Trash className="h-4 w-4" />
                        </Button>

                    </CardContent>
                    
                </div>


            </Card>

            { editAction &&
                <CardFooter className="p-1">
                    <EditGroupForm 
                        event={event} 
                        group={group} 
                        refreshGroups={refreshGroups}
                    />
                </CardFooter>
            }

        </div>
        
    )

}