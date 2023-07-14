// app/providers.tsx
"use client"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui"
import { HyperThemeEditor } from "@hypertheme-editor/chakra-ui"
import theme from "@theme"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<CacheProvider>
			<ChakraProvider theme={theme}>
				<ThemeEditorProvider>{children}</ThemeEditorProvider>
			</ChakraProvider>
		</CacheProvider>
	)
}
