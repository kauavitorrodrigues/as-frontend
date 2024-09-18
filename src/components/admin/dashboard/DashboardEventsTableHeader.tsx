import { TableHead, TableHeader,TableRow } from "@/components/ui/table"

export const DashboardEventsTableHeader = () => {

    return (

        <TableHeader>

            <TableRow>

                <TableHead className="hidden md:table-cell text-center">
                    Id
                </TableHead>

                <TableHead>Nome</TableHead>

                <TableHead className="hidden md:table-cell">
                    Descrição
                </TableHead>

                <TableHead className="text-center">Status</TableHead>

                <TableHead className="hidden md:table-cell text-center">
                    Agrupado
                </TableHead>

                <TableHead className="hidden md:table-cell text-center">
                    Link
                </TableHead>

                <TableHead>
                    <span>Ações</span>
                </TableHead>

            </TableRow>

        </TableHeader>

    )
}