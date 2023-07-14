import { Box, Icon, Text, Center } from "@chakra-ui/react"
import React from "react"
import { IconType } from "react-icons"

interface props {
	icon: IconType
	title: string
}

export default function HeaderLinkOption({ icon, title }: props) {
	return (
		<Box w="full" display="flex" alignItems="center">
			<Center color="white" bgColor="secondary.500" w="14" h="14">
				<Icon as={icon}></Icon>
			</Center>
			<Text>{title}</Text>
		</Box>
	)
}
