"use client"

import { Box, Button, SimpleGrid } from "@chakra-ui/react"
import React from "react"
import HeaderLink from "./components/HeaderLink"
import HeaderLinkOption from "./components/HeaderLinkOption"
import { IoPeople, IoGitBranch, IoEarth, IoCashOutline, IoReceiptSharp, IoCalendar, IoRibbonSharp, IoSchool } from "react-icons/io5"
import { MdSwitchAccount } from "react-icons/md"

export default function Header() {
	return (
		<Box shadow='lg-soft' w="100%" bgColor="white" position="sticky" px="5" py="5" display="flex" justifyContent="space-between" alignItems="center">
			<Box>Logo</Box>
			<Box display="flex" gap="16">
				<HeaderLink title="Delegacion" active>
					<HeaderLinkOption title="¿Quienes somos?" icon={IoPeople} />
					<HeaderLinkOption title="Nuestros servicios" icon={IoGitBranch} />
				</HeaderLink>
				<HeaderLink title="Tramites" cols={2} popoverWidth={600}>
					<HeaderLinkOption title="Movilidad" icon={IoEarth} />
					<HeaderLinkOption title="Becas y ayudas" icon={IoCashOutline} />
					<HeaderLinkOption title="Tramites universitarios" icon={IoReceiptSharp} />
					<HeaderLinkOption title="Plazos de interes" icon={IoCalendar} />
					<HeaderLinkOption title="Cambio de grupo" icon={MdSwitchAccount} />
					<HeaderLinkOption title="Reconocimiento de creditos" icon={IoRibbonSharp} />
					<HeaderLinkOption title="Matriculas" icon={IoSchool} />
				</HeaderLink>

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
