import { Event } from "@/types/Event"
import { TableCell, TableRow } from "../../ui/table"
import { PencilRuler } from "lucide-react"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../../ui/dropdown-menu"
import { Button } from "../../ui/button"
import { Badge } from "../../ui/badge"
import { EventLinkButton } from "./EventLinkButton"

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
                    <DropdownMenuItem>Editar</DropdownMenuItem>
                    <DropdownMenuItem>Excluir</DropdownMenuItem>

                </DropdownMenuContent>

                </DropdownMenu>

            </TableCell>

        </TableRow>
    )
}