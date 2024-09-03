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
		<main className="text-center mx-auto max-w-lg min-h-screen flex flex-col justify-center" >

			<ToggleTheme />

			<header>

				<h1 className="text-3xl uppercase font-bold">Amigo Secreto</h1>

				<Separator className="my-4" />

				<h2>Título evento</h2>
				<p>Descrição Evento</p>

			</header>

			<Separator className="my-4" />

			{/* <Search id={parseInt(params.id)} /> */}

			<footer>Criado por Kauã Vitor</footer>

		</main>
	)
	
}

export default Page;