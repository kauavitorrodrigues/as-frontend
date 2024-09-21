import { UserRoundSearch } from "lucide-react";

export const NotFoundPerson = () => {

    return (

    <div className="flex flex-col items-center justify-center py-10 min-h-90">

        <UserRoundSearch className="h-12 w-14 text-red-500" />

        <h2 className="mt-4 text-xl font-semibold">Nenhuma Pessoa Encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-80 text-center">
            Atualmente, não há pessoas cadastradas neste grupo, mas você pode criar um agora mesmo!
        </p>

    </div>

    );

};
