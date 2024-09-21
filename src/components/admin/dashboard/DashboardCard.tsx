import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,
} from "@/components/ui/card"
import { NotFoundEvents } from "./NotFoundEvents"
import { useEvents } from "@/contexts/eventsContext"
import { DashboardEventsSkeleton } from "./DashboardEventsSkeleton"
import { DashboardEventsTable } from "./DashboardEventsTable"

export const DashboardCard = () => {

    const { filteredEvents, loading } = useEvents()

    return (
        <Card x-chunk="dashboard-06-chunk-0">

            <CardHeader>
                <CardTitle>Eventos</CardTitle>
                <CardDescription>
                    Gerencie todos os eventos de maneira simples.
                </CardDescription>
            </CardHeader>

            <CardContent>
                { loading && <DashboardEventsSkeleton/>}
                { !loading && filteredEvents.length > 0 && <DashboardEventsTable events={filteredEvents} /> }
                { !loading && filteredEvents.length <= 0 && <NotFoundEvents /> }
            </CardContent>

            { !loading && filteredEvents.length > 0 && 
                <CardFooter>
                    <div className="text-xs text-muted-foreground">
                        <p>Mostrando <strong>1-10</strong> de <strong></strong>{filteredEvents.length} eventos</p>
                    </div>
                </CardFooter>
            }

        </Card>        
    )
}