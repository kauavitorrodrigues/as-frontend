import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Event } from "@/types/Event"
import { Edit, Save } from "lucide-react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { EventInfoEditForm } from "../infos/EventInfoEditForm"
import { GroupTabs } from "../groups/GroupTabs"
import { PeopleTabs } from "../people/PeopleTabs"

type Props = {
    event: Event
}

export const EventEditModal = ({ event } : Props ) => {

    return (
        <Dialog >

            <DialogTrigger>
                <DropdownMenuItem className="flex gap-1"
                    onSelect={(e) => e.preventDefault()}
                > <Edit size={15}/> Editar Evento
                </DropdownMenuItem>
            </DialogTrigger>

            <DialogContent className="max-w-2xl">

                <Tabs defaultValue="account" className="m-5">

                    <div className="flex justify-between w-full mb-4">
                        <TabsList className="w-full">
                            <TabsTrigger className="w-full" value="infos">Informações</TabsTrigger>
                            <TabsTrigger className="w-full" value="groups">Grupos</TabsTrigger>
                            <TabsTrigger className="w-full" value="people">Pessoas</TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="infos">
                        <EventInfoEditForm event={event}/>
                    </TabsContent>

                    <TabsContent value="groups">
                        <GroupTabs event={event} />
                    </TabsContent>

                    <TabsContent value="people">
                        <PeopleTabs event={event} />
                    </TabsContent>

                </Tabs>

            </DialogContent>

        </Dialog>        
    )

}   