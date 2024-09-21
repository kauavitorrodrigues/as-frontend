import { AdminPage } from "@/components/admin/AdminPage";
import * as api from "@/api/server";
import { redirect } from "next/navigation";

const Page = async () => {

	try {
		if (process.env.NODE_ENV === 'development') {
			return <AdminPage/>
		} else {
			const isAdminLoggedIn  = await api.pingAdmin()
			if (!isAdminLoggedIn ) return redirect("/admin/login")
			return <AdminPage/>
		}
	} catch (error) {
		console.error("Erro ao verificar o login do administrador:", error)
        return redirect("/")
	}

}	

export default Page;