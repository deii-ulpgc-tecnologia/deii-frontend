"use client"

import { Box, Button } from "@chakra-ui/react"
import React from "react"
import HeaderLink from "./components/HeaderLink"
import HeaderLinkOption from "./components/HeaderLinkOption"
import { IoPeople } from "react-icons/io5"

export default function Header() {
	return (
		<Box w="100%" bgColor="white" position="sticky" px="5" py="5" display="flex" justifyContent="space-between" alignItems="center">
			<Box>Logo</Box>
			<Box display="flex" gap="16">
				<HeaderLink title="Delegacion" active>
					<HeaderLinkOption title="¿Quienes somos?" icon={IoPeople} />
				</HeaderLink>
				<HeaderLink title="Tramites" />
				<HeaderLink title="Noticias" />
				<HeaderLink title="Guía de supervivencia" />
				<HeaderLink title="FAQs" />
			</Box>
			<Button colorScheme="secondary" fontWeight="semibold">
				Tengo un problema
			</Button>
		</Box>
	)
}
