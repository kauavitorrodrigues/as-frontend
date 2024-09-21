import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { mockEvents } from '@/api/MockData';
import { Event } from '@/types/Event';
import * as api from "@/api/admin";

type EventContextType = {
    events: Event[];
    loading: boolean;
    fetchEvents: () => void;
}

const EventsContext = createContext<EventContextType | undefined>(undefined);

type Props = { children: ReactNode }

export const EventsProvider = ({ children} : Props ) => {

	const [ events, setEvents ] = useState<Event[]>([])
    const [ loading, setLoading ] = useState(false)

	const fetchEvents = async () => {

        setLoading(true)

        if (process.env.NODE_ENV === 'development') {
            setTimeout(() => {
                setEvents(mockEvents)    
                setLoading(false)
            }, 1000);
        } else {
            const eventList = await api.getEvents()
            setEvents(eventList)
            setLoading(false)
        }
        
	}
	
	useEffect(() => {
		fetchEvents()
	}, []);

    return (

        <EventsContext.Provider value={{  events, fetchEvents, loading }}>
            {children}
        </EventsContext.Provider>

    );

};

export const useEvents = () : EventContextType  => {

    const context = useContext(EventsContext);

    if (!context) {
        throw new Error('useFetchEvents deve ser usado com um EventsProvider');
    }

    return context

};