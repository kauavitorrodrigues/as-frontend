import { Loader } from "lucide-react"

type Props = {
    size: number
}

export const LoaderIcon = ({ size } : Props ) => {

    return (

        <Loader className="animate-pulse text-center" size={size}/>

    )

}