import type { Meta, StoryObj } from '@storybook/react';

import { TagModelDummy } from '../../../types/db/dummies';
import Filter from './index';

const meta: Meta<typeof Filter> = {
    component: Filter,
    title: 'Webpage/Navigation/Filter',
};

export default meta

type Story = StoryObj<typeof Filter>;

const tag1 = { ...TagModelDummy }; tag1.name = 'Becas'; tag1.color = 'red'
const tag2 = { ...TagModelDummy }; tag2.name = 'Convocatorias'; tag2.color = 'blue'
const tag3 = { ...TagModelDummy }; tag3.name = 'Erasmus'; tag3.color = 'orange'
const tag4 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag4.color = 'green'
const tag5 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag5.color = 'green.200'
const tag6 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag6.color = 'green.200'
const tag7 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag7.color = 'green.200'
const tag8 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag8.color = 'green.200'
const tag9 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag9.color = 'green.200'
const tag10 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag10.color = 'green.200'
const tag11 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag11.color = 'green.200'
const tag12 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag12.color = 'green.200'
const tag13 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag13.color = 'green.200'
const tag14 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag14.color = 'green.200'
const tag15 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag15.color = 'green.200'
const tag16 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag16.color = 'green.200'
const tag17 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag17.color = 'green.200'
const tag18 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag18.color = 'green.200'
const tag19 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag19.color = 'green.200'
const tag20 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag20.color = 'green.200'
const tag21 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag21.color = 'green.200'
const tag22 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag22.color = 'green.200'
const tag23 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag23.color = 'green.200'
const tag24 = { ...TagModelDummy }; tag4.name = 'Progreso y permanencia'; tag24.color = 'green.200'


//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    args: {
        searchPhrase: '',
        category: TagModelDummy,
        tags: [
            tag1,
            tag2,
            tag3,
            tag4,
        ],
        setSearchParams: () => { },
    },
};

export const ManyTags: Story = {
    args: {
        searchPhrase: '',
        category: TagModelDummy,
        tags: [
            tag1,
            tag2,
            tag3,
            tag4,
            tag5,
            tag6,
            tag7,
            tag8,
            tag9,
            tag10,
            tag11,
            tag12,
            tag13,
            tag14,
            tag15,
            tag16,
            tag17,
            tag18,
            tag19,
            tag20,
            tag21,
            tag22,
            tag23,
            tag24,
        ],
        setSearchParams: () => { },
    },
};


/*

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
*/
