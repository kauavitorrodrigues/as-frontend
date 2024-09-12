import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Event } from "@/types/Event"
import { Edit } from "lucide-react"

type Props = {
    event: Event
}

export const EventEditModal = ({ event } : Props ) => {

    return (
        <Dialog>

            <DialogTrigger>
                <DropdownMenuItem className="flex gap-1"
                    onSelect={(e) => e.preventDefault()}
                > <Edit size={15}/> Editar Evento
                </DropdownMenuItem>
            </DialogTrigger>

            <DialogContent>

                <DialogHeader>

                    <DialogTitle>...</DialogTitle>

                    <DialogDescription>
                        ...
                    </DialogDescription>

                </DialogHeader>

            </DialogContent>

        </Dialog>        
    )

}