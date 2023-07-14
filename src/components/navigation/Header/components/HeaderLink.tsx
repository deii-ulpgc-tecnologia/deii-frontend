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
	SimpleGrid,
	Text,
} from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import React from "react"
import { IoChevronDown } from "react-icons/io5"

interface props {
	title: string
	active?: any
	children?: React.ReactNode
	popoverWidth?: number,
	cols?: number
	path?: string;
}

export default function HeaderLink({ title, active, children, popoverWidth = 350, cols = 1, path = '/home'}: props) {
	const textColor = active ? "primary.500" : "gray.600"
	const router = useRouter()

	return (
		<Popover placement="bottom-start">
			<PopoverTrigger>
				<Box display="flex" alignItems="center" gap="1" cursor="pointer" userSelect='none' onClick={() => !children && router.push(path)}>
					<Text color={textColor} fontWeight="bold">
						{title}
					</Text>
					{children && <Icon color="gray.600" as={IoChevronDown}></Icon>}
				</Box>
			</PopoverTrigger>
			{children && (
				<Portal >
					<PopoverContent w={popoverWidth} mt='2'  boxShadow='none !important' borderColor='gray.200' borderWidth='2' borderRadius='lg' shadow='lg-soft !important' padding='3' outline='0px'>
						
						<SimpleGrid columns={cols} gap='3'>
						{children}
</SimpleGrid>
						</PopoverContent>
				</Portal>
			)}
		</Popover>
	)
}
