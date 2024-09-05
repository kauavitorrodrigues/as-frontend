import * as api from "@/api/site";
import { Search } from "@/components/site/Search";
import { SearchForm } from "@/components/site/SearchForm";
import { ToggleTheme } from "@/components/site/ThemeToggle";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";

type Props = { params: { id: string } }

const Page = async ( { params } : Props ) => {

	// const eventItem = await api.getEvent(parseInt(params.id))
	// if( !eventItem || !eventItem.status ) return redirect("/")

	return (
		<main className="text-center items-center mx-auto max-w-lg min-h-screen flex flex-col justify-center gap-10" >

			<ToggleTheme />

			<header className="flex gap-3 flex-col">

				<h1 className="text-3xl uppercase font-bold">Amigo Secreto</h1>
				<h2>Título evento</h2>
				<p>Descrição Evento</p>

			</header>

			<Search id={parseInt(params.id)} />

			<footer className="text-xs">Criado por Kauã Vitor</footer>

		</main>
	)
	
}	

export default Page;