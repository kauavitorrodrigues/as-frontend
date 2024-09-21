import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PencilRuler } from "lucide-react"
import { EventEditModal } from "./modals/EventEditModal"
import { EventDeleteModal } from "./modals/EventDeleteModal"
import { Event } from "@/types/Event"

type Props = {
    event: Event
}

export const EventActions = ({ event } : Props ) => {
    return (
        <DropdownMenu>

            <DropdownMenuTrigger asChild>
                <Button
                    aria-haspopup="true"
                    size="icon"
                    variant="ghost"
                >   <PencilRuler className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">

                <DropdownMenuLabel>Ações</DropdownMenuLabel>

                <EventEditModal event={event}/>
                <DropdownMenuSeparator />
                <EventDeleteModal event={event} />

            </DropdownMenuContent>

        </DropdownMenu>
    )
}