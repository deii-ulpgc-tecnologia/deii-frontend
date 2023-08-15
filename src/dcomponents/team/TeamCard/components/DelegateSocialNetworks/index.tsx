import React from 'react'
import { Link, Icon, Flex } from '@chakra-ui/react'
import { SocialNetwork } from '../../../../../types/db/delegate';
import { IconType } from 'react-icons';
import { BiSolidConversation } from "react-icons/bi"
import {
    AiFillInstagram,
    AiFillFacebook,
    AiFillGithub,
    AiFillLinkedin
} from "react-icons/ai"

interface Props {
    socialNetworks: SocialNetwork[],
}

const icons = new Map<string, IconType>([
    ['AiFillInstagram', AiFillInstagram],
    ['AiFillFacebook', AiFillFacebook],
    ['AiFillGithub', AiFillGithub],
    ['AiFillLinkedin', AiFillLinkedin]
])

export default function DelegateSocialNetworks({ socialNetworks }: Props) {
    return (
        <Flex
            justify={'space-between'}
            w={'45%'}>
            {socialNetworks.map((sn) => (
                <Link key={sn.network.name}>
                    <Icon
                        size={'md'}
                        as={
                            icons.get(sn.network.icon) ?? BiSolidConversation
                        } />
                </Link>
            ))}
        </Flex>
    )
}
