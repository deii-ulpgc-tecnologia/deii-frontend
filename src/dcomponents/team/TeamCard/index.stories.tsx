// Button.stories.ts|tsx

// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import TeamCard  from './index';

const meta: Meta<typeof TeamCard> = {
  component: TeamCard,
};

export default meta;
type Story = StoryObj<typeof TeamCard>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  args: {
    obj: {
        name: "Ruben Santana",
        avatar : "icon",
        rol : "Delegado",
        belongsPresidency: true,
        isHonorary: true,
        id: "1",
        collectionId: "delegate",
        collectionName: "delegate",
        created: "",
        updated: ""
    }
  },
};
