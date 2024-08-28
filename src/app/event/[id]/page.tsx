type Props = { params: { id: string } }

const Page = ( { params } : Props ) => {

	return (
		<h1>Evento : {params.id}</h1>
	)
	
}

export default Page;