import { 
    DropdownMenu, 
    DropdownMenuCheckboxItem, 
    DropdownMenuContent, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger } 
from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

import {
    ListFilter
} from "lucide-react"
import { useState } from "react"

type Props = {
    onFilterByGrouping: (value: "default" | "grouped" | "ungrouped") => void
}


export const EventsGroupingFilter = ({ onFilterByGrouping } : Props) => {


    const [selectedFilter, setSelectedFilter] = useState<"default" | "grouped" | "ungrouped">("default");

    const handleSelectGroupFilter = (value: "default" | "grouped" | "ungrouped") => {
        onFilterByGrouping(value)
        setSelectedFilter(value)
    }

    return (

        <div className="ml-auto flex items-center gap-2">

            <DropdownMenu>

                <DropdownMenuTrigger asChild>

                    <Button variant="outline" className="h-10 gap-1">
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Filtros
                        </span>
                    </Button>

                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">

                    <DropdownMenuLabel>Agrupados</DropdownMenuLabel>

                    <DropdownMenuSeparator/>

                    <DropdownMenuCheckboxItem
                        onClick={() => handleSelectGroupFilter("default")} 
                        checked={selectedFilter === "default"}
                        >Padrão
                    </DropdownMenuCheckboxItem>

                    <DropdownMenuCheckboxItem
                        onClick={() => handleSelectGroupFilter("grouped")} 
                        checked={selectedFilter === "grouped"}
                        >Sim
                    </DropdownMenuCheckboxItem>

                    <DropdownMenuCheckboxItem
                        onClick={() => handleSelectGroupFilter("ungrouped")} 
                        checked={selectedFilter === "ungrouped"}
                        >Não
                    </DropdownMenuCheckboxItem>

                </DropdownMenuContent>

            </DropdownMenu>

        </div>
    )
}