import { req } from "./axios"
import { cookies } from "next/headers"

const getAdminLoggedCookie = async () => {

    const token = cookies().get("token")

    if (!token) {
        throw new Error("Token não encontrado")
    }

    const isLogged = await req.get("/admin/ping", {
        headers: {
            "Authorization": `Bearer ${token.value}`
        }
    })
    
    return isLogged.data.logged

}

export const pingAdmin = async () => {
    try {
        await getAdminLoggedCookie()
        return true
    } catch (err) {
        console.error("Erro de autenticação:", err)
        return false
    }
}