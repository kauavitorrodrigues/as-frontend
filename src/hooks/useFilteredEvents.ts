import { useFilter } from "@/contexts/filterContext";
import { Event } from "@/types/Event";


export const useFilteredEvents = ( events: Event[] ) => {
    
    const { filter } = useFilter()
    
    const filterByStatus = (events: Event[], status: string) => {
        switch (status) {
            case "active":
                return events.filter(event => event.status === true);
            case "inactive":
                return events.filter(event => event.status === false);
            default:
                return events;
        }
    }
    
    const filterByGrouping = (events: Event[], grouping: string) => {
        switch (grouping) {
            case "grouped":
                return events.filter(event => event.grouped === true);
            case "ungrouped":
                return events.filter(event => event.grouped === false);
            default:
                return events;
        }
    }

    const filteredByStatus = filterByStatus(events, filter.status);
    return filterByGrouping(filteredByStatus, filter.grouping);

}