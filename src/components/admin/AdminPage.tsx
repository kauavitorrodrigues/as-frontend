"use client"

import { Dashboard } from "@/components/admin/dashboard/Dashboard";
import { EventsProvider } from "@/contexts/eventsContext";
import { FilterProvider } from "@/contexts/filterContext";

export const AdminPage = () => {
	
	return (
		
		<EventsProvider>
			<FilterProvider> 
				<Dashboard/>
			</FilterProvider>
		</EventsProvider>
	)
	
}