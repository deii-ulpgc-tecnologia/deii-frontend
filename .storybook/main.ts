import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials", 
        "@storybook/addon-interactions", "@chakra-ui/storybook-addon",
        "storybook-addon-pseudo-states"
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
}

export default config
