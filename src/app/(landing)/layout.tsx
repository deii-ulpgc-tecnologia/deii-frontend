import { Container } from "@chakra-ui/react"
import BaseContainer from "@components/containers/BaseContainer"
import { Footer, Header } from "@components/navigation"
import React from "react"

interface props {
	children: React.ReactNode
}

export default function layout({ children }: props) {
	return (
		<>
			<Header></Header>
			<BaseContainer>
				<div>{children}</div>
			</BaseContainer>
			<Footer></Footer>
		</>
	)
}
