"use client"

import { LoginForm } from "@/components/admin/LoginForm";
import {
	Card,
	CardContent
  } from "@/components/ui/card"
import { useState } from "react";
import * as api from "@/api/admin"
import { LoaderIcon } from "@/components/LoaderIcon";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
  
const Page = () => {

	const [ loading, setLoading ] = useState(false)
	const router = useRouter()

	const authUser = async (password: string) => {

		let token = await api.login(password)

		if (!token) { 
			return alert("Acesso negado!") 
		} else {
			setCookie('token', token)
			router.push("/admin")
		} 

	}

	const handleLoginButton = async (password: string) => {
        setLoading(true)
		authUser(password)
		setLoading(false)
    }

	return (
		
		<div className="flex flex-col gap-5">

			<div className="flex flex-col space-y-1.5">

				<h1 className="text-2xl font-semibold leading-none tracking-tight">Formulário de Login</h1>
				<p className="text-sm text-muted-foreground">Preencha os dados corretamente para acessar o painel</p>

			</div>

			<Card className="w-full max-w-md flex flex-col justify-center" >
				<CardContent className="flex flex-col items-center gap-6 p-6">
					<LoginForm
						onLoginButton={handleLoginButton}
						disabled={loading}
					/>
					{ loading && <LoaderIcon size={40} /> }
				</CardContent>
			</Card>

		</div>
	)
	
}	

export default Page;