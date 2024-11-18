"use client"

import * as api from "@/api/admin"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useEvents } from "@/contexts/eventsContext"
import { useDisplayAlertToast } from "@/hooks/useDisplayAlertToast"
import { Event } from "@/types/Event"
import { Trash2 } from "lucide-react"

type Props = {
    event: Event
}

export const EventDeleteModal = ({ event } : Props ) => {

    const eventContext = useEvents()

    const handleDeleteButton = async (event: Event) => { 
        
        try {
            const isSuccess = await api.deleteEvent(event.id)
            useDisplayAlertToast(
                isSuccess, 
                "Evento excluído com sucesso.",
                "O evento foi excluído com sucesso."
            )
        } catch (error) {
            useDisplayAlertToast(false)
        } finally {
            eventContext.fetchEvents()
        }

    }

    return (
        <Dialog>

            <DialogTrigger>

                <DropdownMenuItem className="flex gap-1"
                    onSelect={(e) => e.preventDefault()}
                > <Trash2 size={15}/> Excluir Evento
                </DropdownMenuItem>

            </DialogTrigger>

            <DialogContent>

                <DialogHeader className="flex flex-col gap-4" >

                    <DialogTitle>Você tem certeza?</DialogTitle>
                    
                    <DialogDescription>
                        Essa ação não pode ser desfeita. 
                        Isso vai excluir permanentemente esse evento.
                    </DialogDescription>

                    <Button 
                        variant={"destructive"} 
                        className="flex gap-1"
                        onClick={() => handleDeleteButton(event)}
                        > <Trash2 size={15}/> Excluir
                    </Button>

                </DialogHeader>

            </DialogContent>

        </Dialog>
    )

}