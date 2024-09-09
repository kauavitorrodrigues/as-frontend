import { getCookie } from "cookies-next"
import { req } from "./axios"

const getAdminLoggedCookie = async () => {

    const token = getCookie("token")
    if (!token) {
        throw new Error("Token não encontrado")
    }

    return req.get("/admin/ping", {
        headers: {
            "Authorization": `Token ${token}`
        }
    })

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