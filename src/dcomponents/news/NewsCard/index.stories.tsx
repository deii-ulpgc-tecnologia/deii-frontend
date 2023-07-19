import NewsCard from './index';
import { Meta, StoryObj } from '@storybook/react';
import { NewsDummy } from '../../../types/db/dummies';

const meta: Meta<typeof NewsCard> = {
    component: NewsCard,
    title: 'Webpage/News/NewsCard',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NewsCard>

export const Primary: Story = {
    args: {obj: NewsDummy} 
};
