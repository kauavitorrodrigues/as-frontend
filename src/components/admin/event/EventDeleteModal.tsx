"use client"

import * as api from "@/api/admin"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { toast } from "@/hooks/use-toast"
import { Event } from "@/types/Event"
import { Trash2 } from "lucide-react"

type Props = {
    event: Event
}

export const EventDeleteModal = ({ event } : Props ) => {
    
    const displayToastForRequestOutcome = (isSuccess: boolean) => {
        toast({
            title: isSuccess ? "Sucesso!" : "Ops! Algo deu errado.",
            variant: isSuccess ? "default" : "destructive",
            description: isSuccess
            ? "Evento excluído com sucesso."
            : "Houve um problema com a exclusão, tente novamente mais tarde.",
        });
    }

    const displayToastForRequestError = () => {
        toast({
            title: "Ops! Algo deu errado.",
            variant: "destructive",
            description: "Houve um problema com a exclusão.",
        });
    }

    const handleDeleteButton = async (event: Event) => { 
        
        try {
            const isSuccess = await api.deleteEvent(event.id)
            displayToastForRequestOutcome(isSuccess)
        } catch (error) {
            displayToastForRequestError()
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