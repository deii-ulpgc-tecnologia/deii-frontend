import FaqTagCard from './index';
import { Meta, StoryObj } from '@storybook/react';
import { FaqTagDummy } from '../../../types/db/dummies';

const meta: Meta<typeof FaqTagCard> = {
    component: FaqTagCard,
    title: 'Webpage/Faqs/FaqTagCard',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FaqTagCard>

export const Primary: Story = {
    args: {obj: FaqTagDummy} 
};
