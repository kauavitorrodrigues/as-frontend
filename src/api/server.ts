import { getCookie } from "cookies-next"
import { cookies } from "next/headers"
import { req } from "./axios"

const getAdminLoggedCookie = async () => {

    const token = getCookie("token", { cookies })

    await req.get("/admin/ping", {
        headers: {
            "Authorization": `Token ${token}`
        }
    })

}

export const pingAdmin = async () => {
    try {
        getAdminLoggedCookie()
        return true
    } catch (err) { 
        return false 
    }
}