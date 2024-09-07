"use client"

import { useState } from "react"
import { SearchResult } from "@/types/SearchResult"
import { SearchForm } from "./SearchForm"
import { SearchReveal } from "./SearchReveal"
import * as api from "@/api/site"
import { LoaderIcon } from "../LoaderIcon"

type Props = {
    eventId: number,
}

export const Search = ({ eventId }: Props) => {

    const [ results, setResults ] = useState<SearchResult>()
    const [ loading, setLoading ] = useState(false)

    let tempRes : SearchResult = {
        person: {
            id: 1,
            name: "Pessoa 1"
        },
        personMatched: {
            id: 2,
            name: "Pessoa 2"
        },
    }

    const handleSearchButton = async (cpf: string) => {

        setLoading(true)
        
        let result = await api.searchCPF(eventId, cpf)
        if (!result) return alert("CPF inexistente") 

        setLoading(false)
        setResults(tempRes)

    }

    return (

        <section className="max-w-sm flex items-center justify-center">
    
            { !results && !loading && 
                <SearchForm 
                onSearchButton={handleSearchButton}/> 
            }

            { loading && <LoaderIcon size={60}/> }

            { results && !loading && <SearchReveal results={results}/> }
    
        </section>

    )

}