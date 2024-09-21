import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion"
import { Event } from "@/types/Event"
import { Group } from "@/types/Group"
import { useEffect, useState } from "react"
import { GroupSelect } from "../groups/GroupSelect"
import { PersonComplete } from "@/types/PersonComplete"
import * as api from "@/api/admin"
import { PersonItem } from "./PersonItem"
import { mockPeople } from "@/api/mockData"
import { AddPersonForm } from "./AddPersonForm"
import { LoaderIcon } from "@/components/LoaderIcon"
import { NotFoundPerson } from "./NotFoundPerson"

type Props = {
    event: Event
}

export const PeopleTabs = ({ event } : Props ) => {

    const [ selectedGroup, setSelectedGroup ] = useState<Group | null>(null)
    const [ people, setPeople ] = useState<PersonComplete[]>([])
    const [ loading, setLoading ] = useState(true)

    const loadPeople = async () => {

        if (selectedGroup === null) return

        setLoading(true)

        if (process.env.NODE_ENV === 'development') {
            setTimeout(() => {
                setPeople(mockPeople)    
                setLoading(false)
            }, 1000);
        } else {
            setPeople([])
            const peopleList = await api.getPeople(event.id, selectedGroup.id)
            setLoading(false)
            setPeople(peopleList)
        }

    }

    useEffect(() => {
        loadPeople()
    }, [selectedGroup]);

    return (
        <Card>

            <CardHeader>
                <CardTitle>Pessoas</CardTitle>
                <CardDescription>Selecione um grupo do evento para editar as pessoas</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-6" >

                <GroupSelect
                    onSelectGroup={setSelectedGroup} 
                    event={event}
                />

                <Accordion type="single" collapsible className="w-full">

                    <AccordionItem value="item-1">

                        <AccordionTrigger 
                            disabled={!selectedGroup}
                            className={`
                                text-1xl font-semibold leading-none
                                ${ !selectedGroup && "hover:no-underline text-muted" }
                            `}
                            >Criar Pessoa
                        </AccordionTrigger>

                        <AccordionContent>
                            { selectedGroup && 
                                <AddPersonForm 
                                    group={selectedGroup}
                                    event={event}
                                    refreshPeople={loadPeople}
                                />
                            }
                        </AccordionContent>

                    </AccordionItem>

                    <AccordionItem value="item-2">

                        <AccordionTrigger 
                            disabled={!selectedGroup}
                            className={`
                                text-1xl font-semibold leading-none
                                ${ !selectedGroup && "hover:no-underline text-muted" }
                            `}
                            >Visualizar Pessoas
                        </AccordionTrigger>

                        <AccordionContent className="flex flex-col gap-3" >

                            { loading &&
                                <div className="w-full min-h-20 justify-center flex" >
                                    <LoaderIcon size={50} /> 
                                </div>
                            }

                            { !loading && selectedGroup && people.length > 0 &&
                                people.map(person => ( 
                                    <PersonItem 
                                        key={person.id} 
                                        person={person} 
                                        event={event} 
                                        group={selectedGroup} 
                                        refreshPeople={loadPeople}
                                    />
                                ))
                            }

                            { !loading && selectedGroup && people.length <= 0 &&
                                <NotFoundPerson/>
                            }

                        </AccordionContent>

                    </AccordionItem>

                </Accordion>

            </CardContent>

        </Card>
    )
}