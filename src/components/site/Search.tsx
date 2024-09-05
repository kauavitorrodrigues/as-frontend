"use client"

import { useState } from "react"
import { SearchResult } from "@/types/SearchResult"
import { SearchForm } from "./SearchForm"
import { SearchReveal } from "./SearchReveal"

type Props = {
    id: number
}

export const Search = ({ id }: Props) => {

    const [ results, setResults ] = useState<SearchResult>()

    const handleSearchButton = async (cpf: string) => {
        alert(cpf)
    }

    return (

        <section className="max-w-sm">
    
            { !results && <SearchForm onSearchButton={handleSearchButton}/> }
            { results && <SearchReveal results={results}/> }
    
        </section>

    )

}