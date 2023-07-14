import { Box, Icon, Text, Center } from "@chakra-ui/react"
import React from "react"
import { IconType } from "react-icons"

interface props {
	icon: IconType
	title: string
}

export default function HeaderLinkOption({ icon, title }: props) {
	return (
		<Box w="full" display="flex" alignItems="center" gap='4' userSelect='none' p='2' _hover={{bgColor: "gray.100"}} borderRadius='lg'>
			<Center fontSize='2xl' borderRadius="lg" color="white" bgColor="secondary.500" w="12" h="12" >
				<Icon as={icon}></Icon>
			</Center>
			<Text color='gray.600' fontWeight='semibold'>{title}</Text>
		</Box>
	)
}
