import { Button } from "@/components/ui/button";
import { MegaphoneOff } from "lucide-react";

export const NotFoundEvents = () => {

    return (

    <div className="flex flex-col items-center justify-center py-10 min-h-90">

        <MegaphoneOff className="h-12 w-14 text-red-500" />

        <h2 className="mt-4 text-xl font-semibold">Nenhum Evento Encontrado</h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-80 text-center">
            Não existem eventos cadastrados ou os filtros aplicados não correspondem a nenhum.
        </p>

        <Button className="mt-6" onClick={() => {}}>
            Criar Evento
        </Button>

    </div>

    );

};
