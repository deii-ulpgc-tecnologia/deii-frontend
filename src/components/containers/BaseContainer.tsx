"use client"

import { Container } from "@chakra-ui/react"
import React from "react"

interface props {
	children: React.ReactNode
}

export default function BaseContainer({ children }: props) {
	return <Container minH='100vh' py='36' maxW='container.lg'>{children}</Container>
}
