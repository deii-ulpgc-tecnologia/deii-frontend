"use client"

import {
	Box,
	Button,
	Icon,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverFooter,
	PopoverHeader,
	PopoverTrigger,
	Portal,
	Text,
} from "@chakra-ui/react"
import React, { useState } from "react"

interface props {
	title: string
	active?: any
	children?: React.ReactNode
}

function HeaderLink({ title, active, children }: props) {
	const textColor = active ? "primary.500" : "gray.700"

	return (
		<Popover>
			<PopoverTrigger>
				<Box display="flex">
					<Text color={textColor} fontWeight="semibold">
						{title}
					</Text>
					<Icon></Icon>
				</Box>
			</PopoverTrigger>
			{children && (
				<Portal>
					<PopoverContent>
						<PopoverArrow />
						<PopoverHeader>Header</PopoverHeader>
						<PopoverCloseButton />
						<PopoverBody>
							<Button colorScheme="blue">Button</Button>
						</PopoverBody>
						<PopoverFooter>This is the footer</PopoverFooter>
					</PopoverContent>
				</Portal>
			)}
		</Popover>
	)
}

export default function Header() {
	return (
		<Box w="100%" bgColor="white" position="sticky" px="5" py="5" display="flex" justifyContent="space-between" alignItems="center">
			<Box>Logo</Box>
			<Box display="flex" gap="16">
				<HeaderLink title="Delegacion" active>
					<Box>option 1</Box>
				</HeaderLink>
				<HeaderLink title="Tramites" />
				<HeaderLink title="Noticias" />
				<HeaderLink title="Guía de supervivencia" />
				<HeaderLink title="FAQs" />
			</Box>
			<Box>Logo</Box>
		</Box>
	)
}
