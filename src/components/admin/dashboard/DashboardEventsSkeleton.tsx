import { EventItemSkeleton } from "../event/EventItemSkeleton"
import { Table, TableBody } from "@/components/ui/table"
import { DashboardEventsTableHeader } from "./DashboardEventsTableHeader"

export const DashboardEventsSkeleton = () => {

    return (
    
        <Table>
    
            <DashboardEventsTableHeader/>
    
            <TableBody>
    
                { Array.from({ length: 10 }, (key, index) => (
                    <EventItemSkeleton key={index} />
                ))}
    
            </TableBody>
    
        </Table>
    
    )

}