export type EventsFilter = {
    grouping: "default" | "grouped" | "ungrouped"
    status: "all" | "active" | "inactive"
    display?: string
    default: boolean
}