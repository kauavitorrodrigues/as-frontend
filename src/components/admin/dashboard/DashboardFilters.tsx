import { Badge } from "@/components/ui/badge"
import { TabsList,TabsTrigger } from "@/components/ui/tabs"
import { useFilter } from "@/contexts/filterContext"
import { EventsGroupingFilter } from "../event/EventsGroupingFilter"

export const DashboardFilters = () => {

    const { filter, filterByStatus } = useFilter()

    return (


        <div className="flex justify-between w-full">

            <TabsList>
                <TabsTrigger value="all" onClick={() => filterByStatus("all")}>Todos</TabsTrigger>
                <TabsTrigger value="active" onClick={() => filterByStatus("active")}>Ativos</TabsTrigger>
                <TabsTrigger value="inactive" onClick={() => filterByStatus("inactive")}>Inativos</TabsTrigger>
            </TabsList>

            <div className="flex gap-3 items-center " >

                {!filter.default && filter.display && (
                    <Badge variant="outline" className="h-6">
                        {filter.display}
                    </Badge>
                )}

                <EventsGroupingFilter/>

            </div>

        </div>

    )
}