'use client'

import { Box, Text } from "@chakra-ui/react"
import FaqCard from "@dcomponents/faqs/FaqCard"
import FaqFilters from "@dcomponents/faqs/FaqFilters"
import React from "react"

export default function page() {
	return (
		<Box as='section'>
			<Text as='h1' fontSize='60px' fontWeight='bold' color='gray.700' >FAQs</Text>
			<FaqFilters></FaqFilters>
			<FaqCard></FaqCard>
		</Box>
	)
}
