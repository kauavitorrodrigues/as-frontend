import {
    Table, TableBody, TableHead, TableHeader,TableRow
} from "@/components/ui/table"
import { Event } from "@/types/Event"
import { NotFoundEvents } from "./NotFoundEvents"
import { EventItem } from "../event/EventItem"
import { EventItemSkeleton } from "../event/EventItemSkeleton"

type Props = {
    events: Event[]
    loading: boolean
}

export const DashboardEventsTable = ({loading, events} : Props) => {
    return (

        <>
            { events.length > 0 &&
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

                            <TableHead className="hidden md:table-cell text-center">
                                Link
                            </TableHead>

                            <TableHead>
                                <span>Ações</span>
                            </TableHead>

                        </TableRow>

                    </TableHeader>

                    <TableBody>

                        { !loading && events.map(event => (
                            <EventItem event={event} />
                        ))}

                        { loading && events.map(item => (
                            <EventItemSkeleton key={item.id} />
                        ))}

                    </TableBody>

                </Table>
            }

            { events.length <= 0 && <NotFoundEvents/> }
        
        </>

    )
}