import { 
    DropdownMenu, 
    DropdownMenuCheckboxItem, 
    DropdownMenuContent, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger } 
from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {ListFilter } from "lucide-react"
import { useFilter } from "@/contexts/filterContext"

export const EventsGroupingFilter = () => {

    const { filter, filterByGrouping } = useFilter()

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
                        onClick={() => filterByGrouping("default")} 
                        checked={filter.grouping === "default"}
                        >Padrão
                    </DropdownMenuCheckboxItem>

                    <DropdownMenuCheckboxItem
                        onClick={() => filterByGrouping("grouped")} 
                        checked={filter.grouping === "grouped"}
                        >Sim
                    </DropdownMenuCheckboxItem>

                    <DropdownMenuCheckboxItem
                        onClick={() => filterByGrouping("ungrouped")} 
                        checked={filter.grouping === "ungrouped"}
                        >Não
                    </DropdownMenuCheckboxItem>

                </DropdownMenuContent>

            </DropdownMenu>

        </div>
    )
}