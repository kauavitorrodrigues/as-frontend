import * as api from "@/api/server";
import { redirect } from "next/navigation";

const Page = async () => {

	const logged = await api.pingAdmin()
	if (!logged) return redirect('/admin/login')

	return (
        <div>...</div>
	)
	
}	

export default Page;