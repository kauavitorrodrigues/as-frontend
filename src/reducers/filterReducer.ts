import { EventsFilter } from "@/types/EventsFilters";

type FilterByStatus = {
    type: 'status'
    payload: "all" | "active" | "inactive"
}

type FilterByGrouping = {
    type: 'grouping'
    payload: "default" | "grouped" | "ungrouped"
}

export const initialFilter : EventsFilter = {
    grouping: "default",
    status: "all",
    display: "Padrão",
    default: true
}
 
export type FilterActions = FilterByStatus | FilterByGrouping 

export const filterReducer = ( filter: EventsFilter, action:FilterActions ) : EventsFilter => {

    switch ( action.type ) {
        case "status":
            return {
                ...filter,
                status: action.payload
            }
        case "grouping":
            return {
                ...filter,
                grouping: action.payload,
                display: `
                    ${
                        action.payload === "grouped" ? "Agrupados" 
                        : action.payload === "ungrouped" ? "Não Agrupados" 
                        : "Padrão"
                    }`,
                default: action.payload === "default"
            }
        default:
            return filter;
    }

}