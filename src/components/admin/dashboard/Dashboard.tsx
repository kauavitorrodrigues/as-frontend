import { Tabs,TabsContent } from "@/components/ui/tabs"
import { Event } from "@/types/Event"
import { useFilteredEvents } from "@/hooks/useFilteredEvents"
import { useFilter } from "@/contexts/filterContext"
import { DashboardFilters } from "./DashboardFilters"
import { DashboardCard } from "./DashboardCard"
import { EventCreateModal } from "../event/EventCreateModal"

type Props = {
    events: Event[]
    loading: boolean
}

export const Dashboard = ({ events, loading } : Props ) => {

    const { filter, filterByStatus } = useFilter();
    const filteredEvents = useFilteredEvents(events)

    const handleStatusFilter = (value: string) => {
        filterByStatus(value);
    };

    return (

        <main className="mt-6 grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">

            <Tabs defaultValue="all" onValueChange={handleStatusFilter}>

                <div className="flex items-center gap-3 justify-between">
                    <DashboardFilters/>
                    <EventCreateModal/>
                </div>

                <TabsContent className="mt-6" value={filter.status}> 
                    <DashboardCard 
                        events={filteredEvents} 
                        loading={loading}/>
                </TabsContent>
            </Tabs>

        </main>

    )

}