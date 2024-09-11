import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,
} from "@/components/ui/card"
import { Event } from "@/types/Event"
import { DashboardEventsTable } from "./DashboardEventsTable"

type Props = {
    events: Event[]
    loading: boolean
}

export const DashboardCard = ({ events, loading } : Props) => {
    return (
        <Card x-chunk="dashboard-06-chunk-0">

            <CardHeader>
                <CardTitle>Eventos</CardTitle>
                <CardDescription>
                    Gerencie todos os eventos de maneira simples.
                </CardDescription>
            </CardHeader>

            <CardContent>
                
                <DashboardEventsTable 
                    events={events} 
                    loading={loading}
                />

            </CardContent>

            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Mostrando <strong>1-10</strong> de <strong>{events.length}</strong>{" "}
                    eventos
                </div>
            </CardFooter>

        </Card>        
    )
}