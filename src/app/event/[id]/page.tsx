import * as api from "@/api/site";
import { Search } from "@/components/site/Search";
import { ToggleTheme } from "@/components/ToggleTheme";
import { redirect } from "next/navigation";

type Props = { params: { id: string } }

const Page = async ( { params } : Props ) => {

	const eventItem = await api.getEvent(parseInt(params.id))
	if( !eventItem || !eventItem.status ) return redirect("/")

	return (
		<main className="text-center items-center mx-auto max-w-lg min-h-screen flex flex-col justify-center gap-10" >

			<ToggleTheme />

			<header className="flex gap-3 flex-col">

				<h1 className="text-3xl uppercase font-bold">Amigo Secreto</h1>
				<h2>{eventItem.title}</h2>
				<p>{eventItem.description}</p>

			</header>

			<Search eventId={parseInt(params.id)} />

			<footer className="text-xs">Criado por Kauã Vitor</footer>

		</main>
	)
	
}	

export default Page;