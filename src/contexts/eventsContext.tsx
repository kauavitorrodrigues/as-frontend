import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useFilter } from '@/contexts/filterContext';
import { Event } from '@/types/Event';
import * as api from "@/api/admin";

type EventContextType = {
    events: Event[]
    loading: boolean
    fetchEvents: () => void
    filteredEvents: Event[]
}

const EventsContext = createContext<EventContextType | undefined>(undefined)

type Props = { children: ReactNode }

export const EventsProvider = ({ children} : Props ) => {

    const { filter } = useFilter()
	const [ events, setEvents ] = useState<Event[]>([])
    const [ loading, setLoading ] = useState(false)

	const fetchEvents = async () => {

        setLoading(true)
        const eventList = await api.getEvents()
        setEvents(eventList)
        setLoading(false)
        
	}
	
	useEffect(() => {
		fetchEvents()
	}, [])

    const filteredEvents = events.filter(event => {
        const statusMatch = 
            filter.status === "all" || 
            (filter.status === "active" ? event.status : !event.status)
    
        const groupingMatch = 
            filter.grouping === "default" || 
            (filter.grouping === "grouped" ? event.grouped : !event.grouped)
    
        return statusMatch && groupingMatch
    })

    return (

        <EventsContext.Provider value={{  events, fetchEvents, loading, filteredEvents }}>
            {children}
        </EventsContext.Provider>

    )

}

export const useEvents = () : EventContextType  => {

    const context = useContext(EventsContext)

    if (!context) {
        throw new Error('useFetchEvents deve ser usado com um EventsProvider')
    }

    return context

}