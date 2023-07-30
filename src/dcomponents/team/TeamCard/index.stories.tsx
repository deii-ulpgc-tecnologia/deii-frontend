// Button.stories.ts|tsx

// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import TeamCard from './index';
import { DelegateDummy } from '../../../types/db/dummies';

const meta: Meta<typeof TeamCard> = {
    component: TeamCard,
    title: 'Webpage/Team/TeamCard',
};

export default meta;
type Story = StoryObj<typeof TeamCard>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    args: {
        obj: DelegateDummy
    },
};

const DelegateDummyHonorific = { ...DelegateDummy }
DelegateDummyHonorific.isHonorary = true

export const IsHonorific: Story = {
    args: {
        obj: DelegateDummyHonorific
    },
};

const DelegateDummyNoNetwork = { ...DelegateDummy }
DelegateDummyNoNetwork.socialNetworks = []

export const NoNetworks: Story = {
    args: {
        obj: DelegateDummyNoNetwork
    },
};

const DelegateDummyNoRol = { ...DelegateDummy }
DelegateDummyNoRol.rol = ""

export const NoRol: Story = {
    args: {
        obj: DelegateDummyNoRol
    },
};
