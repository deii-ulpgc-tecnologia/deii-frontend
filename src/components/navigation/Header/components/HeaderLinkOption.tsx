import { Box, Icon, Text, Center } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import { IconType } from "react-icons"

interface props {
	icon: IconType
	title: string
	path?: string
}

export default function HeaderLinkOption({ icon, title, path = "home" }: props) {
	return (
		<Link href={path} replace>
			<Box w="full" display="flex" alignItems="center" gap='4' userSelect='none' p='2' _hover={{bgColor: "gray.100"}} borderRadius='lg' cursor='pointer'>
				<Center fontSize='2xl' borderRadius="lg" color="white" bgColor="secondary.500" w="12" h="12" >
					<Icon as={icon}></Icon>
				</Center>
				<Text color='gray.600' fontWeight='semibold'>{title}</Text>
			</Box>
		</Link>
	)
}
