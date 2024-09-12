import { getCookie } from "cookies-next"
import { req } from "./axios"
import { Event } from "@/types/Event"

const logUserIn = async (password: string) => {
    const json = await req.post("/admin/login", {password})
    return json.data.token as string ?? false
}

export const login = async (password: string) => {
    try {
        logUserIn(password)
    } catch (err) { 
        return false 
    }    
}

export const getEvents = async () => {
    const token = getCookie("token")
    const json = await req.get("/admin/events", {
        headers: { "Authorization": `Token ${token}` }
    })
    return json.data.events as Event[] ?? []
}

export const deleteEvent = async (id: number) => {
    const token = "11121344123"
    const json = await req.delete(`/admin/events/${id}`, {
        headers: { "Authorization": `Token ${token}` }
    })
    return !json.data.error
}