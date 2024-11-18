import { AdminPage } from "@/components/admin/AdminPage";
import * as api from "@/api/server";
import { redirect } from "next/navigation";

const Page = async () => {

	try {
		const isAdminLoggedIn  = await api.pingAdmin()
		if (!isAdminLoggedIn ) return redirect("/admin/login")
		return <AdminPage/>
   	} catch (error) {
	   console.error("Erro ao verificar o login do administrador:", error)
	   return redirect("/admin/login")
   	}

}	

export default Page;