import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Event } from "@/types/Event"
import { Edit, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

type Props = {
    event: Event
}

export const EventEditModal = ({ event } : Props ) => {

    return (
        <Dialog>

            <DialogTrigger>
                <DropdownMenuItem className="flex gap-1"
                    onSelect={(e) => e.preventDefault()}
                > <Edit size={15}/> Editar Evento
                </DropdownMenuItem>
            </DialogTrigger>

            <DialogContent className="max-w-5xl" >

                <Tabs defaultValue="account" className="m-5">

                    <div className="flex justify-between w-full mb-4">
                        <TabsList className="w-full">
                            <TabsTrigger className="w-full" value="infos">Informações</TabsTrigger>
                            <TabsTrigger className="w-full" value="groups">Grupos</TabsTrigger>
                            <TabsTrigger className="w-full" value="people">Pessoas</TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="infos">

                        <Card>

                            <CardHeader>

                                <CardTitle>Informações</CardTitle>
                                <CardDescription>
                                    Atualize as informações gerais do evento.
                                </CardDescription>
                                
                            </CardHeader>

                            <CardContent className="space-y-2">
                                
                            </CardContent>

                            <CardFooter>
                                <Button 
                                    className="w-full h-12 flex gap-2" 
                                    onClick={() => {}}
                                    > <Save size={20} /> Salvar
                                </Button>
                            </CardFooter>

                        </Card>

                    </TabsContent>

                    <TabsContent value="groups">

                        <Card>

                            <CardHeader>

                                <CardTitle>Grupos</CardTitle>
                                <CardDescription>
                                    Atualize as informações de grupo do evento.
                                </CardDescription>
                                
                            </CardHeader>

                            <CardContent 
                                className="space-y-2">

                            </CardContent>

                            <CardFooter>
                                <Button 
                                    className="w-full h-12 flex gap-2" 
                                    onClick={() => {}}
                                    > <Save size={20} /> Salvar
                                </Button>
                            </CardFooter>

                        </Card>

                    </TabsContent>

                    <TabsContent value="people">

                        <Card>

                            <CardHeader>

                                <CardTitle>Pessoas</CardTitle>
                                <CardDescription>
                                    Atualize as informações de pessoas do evento.
                                </CardDescription>
                                
                            </CardHeader>

                            <CardContent className="space-y-2">
                                
                            </CardContent>

                            <CardFooter>
                                <Button 
                                    className="w-full h-12 flex gap-2" 
                                    onClick={() => {}}
                                    > <Save size={20} /> Salvar
                                </Button>
                            </CardFooter>

                        </Card>

                    </TabsContent>

                </Tabs>

            </DialogContent>

        </Dialog>        
    )

}   