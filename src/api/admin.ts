import { getCookie } from "cookies-next"
import { req } from "./axios"
import { Event } from "@/types/Event"
import { Group } from "@/types/Group"
import { PersonComplete } from "@/types/PersonComplete"

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
    const token = getCookie("token")
    const json = await req.delete(`/admin/events/${id}`, {
        headers: { "Authorization": `Token ${token}` }
    })
    return !json.data.error
}

export type AddEventData = {
    tittle: string,
    description: string,
    grouped: boolean
}

export const createEvent = async (data: AddEventData) => {
    const token = getCookie("token")
    const json = await req.post(`/admin/events`, data, {
        headers: { "Authorization": `Token ${token}` }
    })
    return !!json.data.event
}

export type UpdateEventData = {
    tittle?: string,
    description?: string,
    grouped?: boolean,
    status?: boolean
}

export const updateEvent = async (id: number, data: UpdateEventData) => {
    const token = getCookie("token")
    const json = await req.put(`/admin/events/${id}`, data, {
        headers: { "Authorization": `Token ${token}` }
    })
    return !!json.data.event
}

// GROUPS

export const getGroups = async(eventId: number) => {
    const token = getCookie("token")
    const json = await req.get(`/admin/events/${eventId}/groups`, {
        headers: { "Authorization": `Token ${token}` }
    })
    return json.data.event as Group[] ?? []
}

export type AddGroupData = { name: string }

export const addGroup = async(eventId: number, data: AddGroupData) => {
    const token = getCookie("token")
    const json = await req.post(`/admin/events/${eventId}/groups`, data, {
        headers: { "Authorization": `Token ${token}` }
    })
    return json.data.group as Group ?? false
}

export type UpdateGroupData = { name: string }

export const updateGroup = async(eventId: number, groupId: number, data: UpdateGroupData) => {
    const token = getCookie("token")
    const json = await req.put(`/admin/events/${eventId}/groups/${groupId}`, data, {
        headers: { "Authorization": `Token ${token}` }
    })
    return json.data.group as Group ?? false
}

export const deleteGroup = async(eventId: number, groupId: number) => {
    const token = getCookie("token")
    const json = await req.delete(`/admin/events/${eventId}/groups/${groupId}`, {
        headers: { "Authorization": `Token ${token}` }
    })
    return !json.data.error
}

// PEOPLE

export const getPeople = async(eventId: number, groupId: number) => {
    const token = getCookie("token")
    const json = await req.get(`/admin/events/${eventId}/groups/${groupId}/people`, {
        headers: { "Authorization": `Token ${token}` }
    })
    return json.data.people as PersonComplete[] ?? []
}

export type AddPersonData = { 
    name: string,
    cpf: string
}

export const addPerson = async(eventId: number, groupId: number, data: AddPersonData) => {
    const token = getCookie("token")
    const json = await req.post(`/admin/events/${eventId}/groups/${groupId}/people`, data, {
        headers: { "Authorization": `Token ${token}` }
    })
    return json.data.person as PersonComplete ?? false
}

export type UpdatePersonData = { 
    name?: string,
    cpf?: string
}

export const updatePerson = async(eventId: number, groupId: number, id: number, data: UpdatePersonData) => {
    const token = getCookie("token")
    const json = await req.put(`/admin/events/${eventId}/groups/${groupId}/people/${id}`, data, {
        headers: { "Authorization": `Token ${token}` }
    })
    return json.data.person as PersonComplete ?? false
}

export const deletePerson = async(eventId: number, id: number, groupId: number) => {
    const token = getCookie("token")
    const json = await req.delete(`/admin/events/${eventId}/groups/${groupId}/people/${id}`, {
        headers: { "Authorization": `Token ${token}` }
    })
    return !json.data.error
}