"use client"

import * as api from "@/api/admin";
import { Dashboard } from "@/components/admin/dashboard/Dashboard";
import { FilterProvider } from "@/contexts/filterContext";
import { Event } from "@/types/Event";
import { useEffect, useState } from "react";

export const AdminPage = () => {

	const [ events, setEvents ] = useState<Event[]>([])
	const [ loading, setLoading ] = useState(false)

	const loadEvents = async () => {
		setLoading(true)
		const eventList = await api.getEvents()
		setEvents(eventList)
		setLoading(false)
	}
	
	useEffect(() => {
		loadEvents()
	}, []);

	return (

		<FilterProvider> 
			
			<Dashboard 
				events={events}
				loading={loading}
			/>

		</FilterProvider>
	)
	
}	