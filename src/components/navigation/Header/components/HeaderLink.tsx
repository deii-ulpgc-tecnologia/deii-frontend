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
import React from "react"
import { IoChevronDown } from "react-icons/io5"

interface props {
	title: string
	active?: any
	children?: React.ReactNode
}

export default function HeaderLink({ title, active, children }: props) {
	const textColor = active ? "primary.500" : "gray.600"

	return (
		<Popover placement="bottom-start">
			<PopoverTrigger>
				<Box display="flex" alignItems="center" gap="1" cursor="pointer">
					<Text color={textColor} fontWeight="bold">
						{title}
					</Text>
					{children && <Icon color="gray.600" as={IoChevronDown}></Icon>}
				</Box>
			</PopoverTrigger>
			{children && (
				<Portal>
					<PopoverContent>{children}</PopoverContent>
				</Portal>
			)}
		</Popover>
	)
}
