import {
    TabsList,TabsTrigger,
} from "@/components/ui/tabs"
import { EventsGroupingFilter } from "./EventsGroupingFilter"

type Props = {
    groupingFilter: (grouped: string) => void
}

export const EventsFilter = ({ groupingFilter } : Props) => {
    return (

        <div className="flex justify-between w-full">
            <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="active">Ativos</TabsTrigger>
            <TabsTrigger value="inactive">Inativos</TabsTrigger>
            </TabsList>
            <EventsGroupingFilter
                onFilterByGrouping={groupingFilter}
            />
        </div>

    )
}