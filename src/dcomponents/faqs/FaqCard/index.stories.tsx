import FaqCard from './index';
import { Meta, StoryObj } from '@storybook/react';
import { FaqDummy } from '../../../types/db/dummies';

const meta: Meta<typeof FaqCard> = {
    component: FaqCard,
    title: 'Webpage/Faqs/FaqCard',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FaqCard>

export const Primary: Story = {
    args: {
        obj: FaqDummy,
        open: false
    } 
};

export const Open: Story = {
    args: {
        obj: FaqDummy,
        open: true
    } 
};
