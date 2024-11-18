import { Table, TableBody } from "@/components/ui/table"
import { DashboardEventsTableHeader } from "./DashboardEventsTableHeader"
import { EventItem } from "../event/EventItem"
import { Event } from "@/types/Event"

type Props = {
    events: Event[]
}

export const DashboardEventsTable = ({events} : Props) => {

    return (
    
        <Table>
    
            <DashboardEventsTableHeader/>
    
            <TableBody>
    
                { events.map(event => (
                    <EventItem event={event} key={event.id} />
                ))}
    
            </TableBody>
    
        </Table>
    
    )

}