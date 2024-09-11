import { Skeleton } from "@/components/ui/skeleton"
import { TableCell, TableRow } from "@/components/ui/table"

export const EventItemSkeleton = () => {
    return (
        <TableRow>

            <TableCell className="hidden md:table-cell text-center">
                <Skeleton className="h-8 max-w-8 mx-auto"/>
            </TableCell>

            <TableCell className="font-medium max-w-32">
                <Skeleton className="h-8"/>
            </TableCell>

            <TableCell className="hidden md:table-cell max-w-72">
                <Skeleton className="h-8 w-full min-w-64"/>
            </TableCell>

            <TableCell className="text-center max-w-20">
                <Skeleton className="h-8 mx-auto max-w-20 rounded-full"/>
            </TableCell>

            <TableCell className="text-center max-w-20">
                <Skeleton className="h-8 mx-auto max-w-20 rounded-full"/>
            </TableCell>

            <TableCell className="text-center max-w-20">
                <Skeleton className="h-8 mx-auto max-w-20 rounded-full"/>
            </TableCell>

            <TableCell>
                <Skeleton className="h-8 max-w-8 flex-1"/>
            </TableCell>

        </TableRow>
    )
}