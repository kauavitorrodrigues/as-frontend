"use client"

import { LoginForm } from "@/components/admin/LoginForm";

const Page = () => {

	return (
		
		<main className="flex min-h-[calc(100vh-80px)] flex-col gap-5 items-center justify-center">

			<div className="space-y-1.5 w-full max-w-md flex flex-col justify-center">

				<h1 className="text-2xl font-semibold leading-none tracking-tight">Formulário de Login</h1>
				<p className="text-sm text-muted-foreground">Preencha os dados corretamente para acessar o painel</p>

			</div>

			<LoginForm/>

		</main>
	)
	
}	

export default Page;