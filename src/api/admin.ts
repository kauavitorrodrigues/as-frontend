import { req } from "./axios"

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