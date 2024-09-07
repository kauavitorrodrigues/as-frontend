import { ToggleTheme } from "@/components/ThemeToggle";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Amigo Secreto | Admin"
}

type Props = { children: ReactNode }

const Layout = ({ children } : Props ) => {

    return (
        <div className="flex flex-col items-center justify-start min-h-screen gap-6">

            <header className="text-center flex flex-col gap-1 w-full p-3 border-b">
                <ToggleTheme />
                <h1 className="text-2xl uppercase font-bold">Amigo Secreto</h1>
                <h2>Painel de controle</h2>
            </header>

            <main className="w-full max-w-3xl flex items-center justify-center">{children}</main>

        </div>
    )

}

export default Layout;