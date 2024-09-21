import { Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion"
import { Event } from "@/types/Event"
import { useEffect, useState } from "react"
import { Group } from "@/types/Group"
import { NotFoundGroups } from "./NotFoundGroups"
import { AddGroupForm } from "./AddGroupForm"
import { GroupItem } from "./GroupItem"
import { mockGroups } from "@/api/mockData"
import * as api from "@/api/admin"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LoaderIcon } from "@/components/LoaderIcon"

type Props = {
    event: Event
}

export const GroupTabs = ({ event } : Props ) => {

    const [ loading, setLoading ] = useState(true)
    const [ groups, setGroups ] = useState<Group[]>([])

    const loadGroups = async () => {

        setLoading(true)

        if (process.env.NODE_ENV === 'development') {
            setTimeout(() => {
                setGroups(mockGroups)    
                setLoading(false)
            }, 1000);
        } else {
            const groupList = await api.getGroups(event.id)
            setLoading(false)
            setGroups(groupList)
        }

    }

    useEffect(() => {
        loadGroups()
    }, []);

    return (

        <Card>

            <CardHeader>
                <CardTitle>Grupos</CardTitle>
                <CardDescription>Crie um novo grupo ou atualize informações de um grupo existente.</CardDescription>
            </CardHeader>

            <CardContent>

                <Accordion type="single" collapsible defaultValue="item-2" className="w-full">

                    <AccordionItem value="item-1">

                        <AccordionTrigger className="text-1xl font-semibold leading-none">Criar Grupo</AccordionTrigger>

                        <AccordionContent>
                            <AddGroupForm 
                                event={event}
                                refreshGroups={loadGroups} 
                            />
                        </AccordionContent>

                    </AccordionItem>

                    <AccordionItem value="item-2">

                        <AccordionTrigger className="text-1xl font-semibold leading-none">Visualizar Grupos</AccordionTrigger>

                        <AccordionContent className="flex flex-col gap-3" >

                            { loading &&
                                <div className="w-full min-h-20 justify-center flex" >
                                    <LoaderIcon size={50} /> 
                                </div>
                            }

                            { !loading && groups.length > 0 && 
                                groups.map((group) => (
                                    <GroupItem 
                                        key={group.id}
                                        event={event} 
                                        group={group}
                                        refreshGroups={loadGroups} 
                                    />
                                ))
                            }

                            { !loading && groups.length <= 0 && <NotFoundGroups/> }

                        </AccordionContent>

                    </AccordionItem>

                </Accordion>

            </CardContent>  

        </Card>

    )
}  