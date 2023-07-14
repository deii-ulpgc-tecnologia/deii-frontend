import type { Preview } from "@storybook/react"
import { useRouter } from "next/router";
import theme from '../src/theme'

const preview: Preview = {
	parameters: {
		nextjs: {
			appDirectory: true,
		  },
		  chakra: {
			theme,
		  },
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export default preview
