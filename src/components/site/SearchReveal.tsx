import { SearchResult } from "@/types/SearchResult"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
  

type Props = {
    results: SearchResult
}

export const SearchReveal = ({results}: Props) => {

    return (
        <Card className="p-3">

            <CardHeader>

                <CardTitle>
                    Parabéns, {results.person.name}!
                </CardTitle>
                <CardDescription>Você tirou <strong>{results.personMatched.name}</strong>.</CardDescription>

            </CardHeader>
            
        </Card>
    )

}
