import { Event } from "@/types/Event"
import { TableCell, TableRow } from "../../ui/table"
import { Badge } from "../../ui/badge"
import { EventLinkButton } from "./EventLinkButton"
import { EventActions } from "./EventActions"

type Props = {
    event: Event
}

export const EventItem = ({event} : Props) => {

    return (

        <TableRow>

            <TableCell className="hidden md:table-cell text-center">
                {event.id}
            </TableCell>

            <TableCell className="font-medium max-w-32">
                {event.title}
            </TableCell>

            <TableCell className="hidden md:table-cell max-w-72">
                {event.description}
            </TableCell>

            <TableCell className="text-center max-w-20">
                <Badge 
                    className="w-full max-w-20 h-7 text-center justify-center" 
                    variant={event.status ? "default" : "destructive"}
                >{event.status ? "Ativo" : "Inativo"}</Badge>
            </TableCell>

            <TableCell className="text-center max-w-20">
                <Badge 
                    className="w-full max-w-20 h-7 text-center justify-center" 
                    variant={event.grouped ? "default" : "destructive"}
                >{event.grouped ? "Sim" : "Não"}</Badge>
            </TableCell>

            <TableCell className="text-center">
                <EventLinkButton
                    href={`event/${event.id}`}
                    target="_blank"
                    replace={true}
                />
            </TableCell>

            <TableCell>
                <EventActions event={event} />
            </TableCell>

        </TableRow>
    )
}