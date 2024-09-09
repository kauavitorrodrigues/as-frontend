import {
    DropdownMenu, DropdownMenuContent, 
    DropdownMenuItem, DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import {
    Table, TableBody, TableCell,
    TableHead, TableHeader,TableRow
} from "@/components/ui/table"

import {
    PencilRuler,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Event } from "@/types/Event"
import { Skeleton } from "../ui/skeleton"
import { Button } from "@/components/ui/button"

type Props = {
    events: Event[]
    loading: boolean
}

export const DashboardEventsTable = ({loading, events} : Props) => {
    return (
        <Table>

            <TableHeader>

                <TableRow>

                    <TableHead className="hidden md:table-cell text-center">
                        Id
                    </TableHead>

                    <TableHead>Nome</TableHead>

                    <TableHead className="hidden md:table-cell">
                        Descrição
                    </TableHead>

                    <TableHead className="text-center">Status</TableHead>

                    <TableHead className="hidden md:table-cell text-center">
                        Agrupado
                    </TableHead>

                    <TableHead>
                        <span>Ações</span>
                    </TableHead>

                </TableRow>

            </TableHeader>

            <TableBody>

                { !loading && events.map(event => (

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

                        <TableCell className="text-center">
                            <Badge 
                                className="w-full max-w-20 h-7 text-center justify-center" 
                                variant={event.grouped ? "default" : "destructive"}
                            >{event.grouped ? "Sim" : "Não"}</Badge>
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
                                <DropdownMenuItem>Deletar</DropdownMenuItem>

                            </DropdownMenuContent>

                            </DropdownMenu>

                        </TableCell>

                    </TableRow>

                ))}

                { loading && events.map(item => (

                    <TableRow>

                        <TableCell className="hidden md:table-cell text-center">
                            <Skeleton className="h-8 max-w-8 mx-auto"/>
                        </TableCell>

                        <TableCell className="font-medium max-w-32">
                            <Skeleton className="h-8"/>
                        </TableCell>

                        <TableCell className="hidden md:table-cell max-w-72">
                            <Skeleton className="h-8 w-full min-w-64"/>
                        </TableCell>

                        <TableCell className="text-center max-w-20">
                            <Skeleton className="h-8 mx-auto max-w-20 rounded-full"/>
                        </TableCell>

                        <TableCell className="text-center max-w-20">
                            <Skeleton className="h-8 mx-auto max-w-20 rounded-full"/>
                        </TableCell>

                        <TableCell>
                            <Skeleton className="h-8 max-w-8 flex-1"/>
                        </TableCell>

                    </TableRow>

                ))}

            </TableBody>

        </Table>
    )
}