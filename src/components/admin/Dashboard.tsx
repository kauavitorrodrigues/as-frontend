import { Button } from "@/components/ui/button"
import { Tabs,TabsContent,
} from "@/components/ui/tabs"
import { Event } from "@/types/Event"
import { useEffect, useState } from "react"
import { PlusCircle } from "lucide-react"
import { EventsFilter } from "./EventsFilters"
import { DashboardCard } from "./DashboardCard"

type Props = {
    events: Event[]
    loading: boolean
}

export const Dashboard = ({ events, loading } : Props ) => {

    const [ filteredEvents, setFilteredEvents ] = useState<Event[]>(events);
    const [ tableView, setTableView ] = useState("all")
    const [groupFilter, setGroupFilter] = useState<string | null>(null);
    const [statusFilter, setStatusFilter] = useState<string | null>("all");

    const applyFilters = (events: Event[], status: string | null, grouped: string | null) => {

        let result = events;

        if (status === "active") {
            result = result.filter(event => event.status);
        } else if (status === "inactive") {
            result = result.filter(event => !event.status);
        }

        if (grouped === "grouped") {
            result = result.filter(event => event.grouped);
        } else if (grouped === "ungrouped") {
            result = result.filter(event => !event.grouped);
        }

        return result;

    };

    const filterEventsByStatus = (status: string) => {
        setStatusFilter(status);
        setTableView(status);
        const filtered = applyFilters(events, status, groupFilter);
        setFilteredEvents(filtered);
    };

    const filterEventsByGrouping = (grouped: string) => {
        setGroupFilter(grouped);
        const filtered = applyFilters(events, statusFilter, grouped);
        setFilteredEvents(filtered);
    };

    useEffect(() => {
        setFilteredEvents(events);
    }, [events]);


    return (

        <main className="mt-6 grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">

            <Tabs defaultValue="all" onValueChange={filterEventsByStatus}>

                <div className="flex items-center gap-3 justify-between">

                    <EventsFilter 
                        groupingFilter={filterEventsByGrouping}>
                    </EventsFilter>

                    <Button className="h-10 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sr-only 
                            sm:not-sr-only sm:whitespace-nowrap">
                            Adicionar Evento
                        </span>
                    </Button>

                </div>

                <TabsContent className="mt-6" value={tableView}> 
                    <DashboardCard 
                        events={filteredEvents} 
                        loading={loading}/>
                </TabsContent>

            </Tabs>

        </main>

    )

}