import { Tabs,TabsContent } from "@/components/ui/tabs"
import { useFilter } from "@/contexts/filterContext"
import { DashboardFilters } from "./DashboardFilters"
import { DashboardCard } from "./DashboardCard"
import { EventCreateModal } from "../event/modals/EventCreateModal"

export const Dashboard = () => {

    const { filter, filterByStatus } = useFilter();

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
                    <DashboardCard/>
                </TabsContent>

            </Tabs>

        </main>

    )

}