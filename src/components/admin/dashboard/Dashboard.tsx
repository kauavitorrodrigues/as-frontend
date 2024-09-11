import { Button } from "@/components/ui/button"
import { Tabs,TabsContent } from "@/components/ui/tabs"
import { Event } from "@/types/Event"
import { PlusCircle } from "lucide-react"
import { useFilteredEvents } from "@/hooks/useFilteredEvents"
import { useFilter } from "@/contexts/filterContext"
import { DashboardFilters } from "./DashboardFilters"
import { DashboardCard } from "./DashboardCard"

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

                    <Button className="h-10 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sr-only 
                            sm:not-sr-only sm:whitespace-nowrap">
                            Adicionar Evento
                        </span>
                    </Button>

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