import { Metadata } from "next";
import { ReactNode } from "react";
import { ToggleTheme } from "@/components/ToggleTheme";

export const metadata: Metadata = {
    title: "Amigo Secreto | Admin"
}

type Props = { children: ReactNode }

const Layout = ({ children } : Props ) => { 
    return (
        
        <div>

            <header className="pl-6 h-20 flex gap-4 text-center items-center">
                <h1 className="text-2xl font-bold">Amigo Secreto</h1>
                <ToggleTheme/>
            </header>

            <div className="flex min-h-[calc(100vh-80px)] w-full flex-col bg-muted/40">

                {children}

            </div>

        </div>
        
    )
}

export default Layout;