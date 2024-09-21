import { MessageCircleOff } from "lucide-react";

export const NotFoundGroups = () => {

    return (

    <div className="flex flex-col items-center justify-center py-10 min-h-90">

        <MessageCircleOff className="h-12 w-14 text-red-500" />

        <h2 className="mt-4 text-xl font-semibold">Nenhum Grupo Encontrado</h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-80 text-center">
            Atualmente, não há grupos cadastrados para este evento, mas você pode criar um agora mesmo!
        </p>

    </div>

    );

};
