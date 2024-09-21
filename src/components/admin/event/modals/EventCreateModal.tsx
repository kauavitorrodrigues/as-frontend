import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PlusCircle } from "lucide-react"
import { EventCreateForm } from "../EventCreateForm"

export function EventCreateModal() {

    return (

        <Dialog>

            <DialogTrigger asChild>
                <Button className="h-10 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only 
                        sm:not-sr-only sm:whitespace-nowrap">
                        Adicionar Evento
                    </span>
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">

                <DialogHeader className="flex flex-col gap-2" >

                    <DialogTitle>Adicionar Evento</DialogTitle>

                    <DialogDescription>
                        Preencha os campos para adicionar um novo evento
                    </DialogDescription>

                </DialogHeader>

                <EventCreateForm />

            </DialogContent>

        </Dialog>

    )
}
