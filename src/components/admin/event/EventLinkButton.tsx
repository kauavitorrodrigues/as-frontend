import { Button } from "@/components/ui/button";
import { Link as LucideLink } from "lucide-react";
import Link from "next/link";

type Props = {
    href: string;
    target: string;
    replace: boolean
}

export const EventLinkButton = ({href, target, replace} : Props) => {

    return (
        <Button aria-haspopup="true" size="icon" variant="ghost">

            <Link 
                href={href} target={target} replace={replace} 
                className="w-full h-full flex items-center justify-center"
                > <LucideLink className="h-4 w-4"></LucideLink>
            </Link>

        </Button>
    )
}