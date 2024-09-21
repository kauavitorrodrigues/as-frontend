import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Group } from "@/types/Group"
import { useEffect, useState } from "react"
import { NotFoundGroups } from "./NotFoundGroups"
import { Event } from "@/types/Event"
import * as api from "@/api/admin"
import { mockGroups } from "@/api/mockData"
import { LoaderIcon } from "@/components/LoaderIcon"

type Props = {
    event: Event
    onSelectGroup: (group : Group) => void
}

export const GroupSelect = ({ event, onSelectGroup } : Props ) => {

    const [ groups, setGroups ] = useState<Group[]>([])
    const [ loading, setLoading ] = useState(true)

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

        <>
            
            <Select
                onValueChange={(value) => {
                    const selectedGroup = groups.find((group) => group.name === value)
                    if (selectedGroup) {
                    onSelectGroup(selectedGroup)
                    }
                }}
            >

                <SelectTrigger 
                    disabled={groups.length <= 0}
                    className="w-[180px]">
                    <SelectValue 
                        placeholder={ loading 
                        ? "Carregando..." 
                        : "Selecione um grupo"
                    }/>
                </SelectTrigger>

                <SelectContent>

                    <SelectGroup>

                        <SelectLabel>Grupos</SelectLabel>

                        { groups.map( group => (
                            <SelectItem 
                                key={group.id}
                                value={group.name}
                            >{group.name}</SelectItem>                            
                        ))}

                    </SelectGroup>

                </SelectContent>

            </Select>

            { loading && 
                <div className="flex items-center w-full justify-center min-h-90">
                    <LoaderIcon size={70} /> 
                </div>
            }

            { !loading && groups.length <= 0 && <NotFoundGroups/>  }

        </>

    )

}