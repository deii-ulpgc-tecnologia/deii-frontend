"use client"

import React from 'react'
import { Link, Icon } from '@chakra-ui/react'
import { SocialNetwork } from '../../../../../types/db/delegate';
import { IconType } from 'react-icons';
import { AiFillInstagram, AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { BiSolidConversation } from "react-icons/bi"

interface Props {
    socialNetworks : SocialNetwork[],
    size: number
    sizeHover: number,
}

export default function DelegateSocialNetworks({socialNetworks, size,sizeHover}: Props) {
    /* Inserta las redes sociales que tenga el ususario dentro de la carta */
    function addSocialNetwork(){
        let showSocialNetworks:any[] = [];
        if(socialNetworks.length > 0)
            socialNetworks.forEach((sn) => {
                let icon: IconType = stringToIconType(sn.network.icon);
                showSocialNetworks.push(
                    <Link href={sn.url} w={size} h={size} _hover={{ width:{sizeHover}, height:{sizeHover}}} isExternal cursor='pointer' textDecoration='none'>
                        <Icon as={icon} w={size} h={size} transition={'all ease .4s'} _hover={{ width:{sizeHover}+'px', height:{sizeHover}+'px', fill:'#454545'}}></Icon>
                    </Link>
                )
            })
        return showSocialNetworks;
    }

    function stringToIconType(string: string): IconType{
        switch(string){
            case 'AiFillInstagram': return AiFillInstagram
            case 'AiFillFacebook': return AiFillFacebook
            case 'AiFillGithub': return AiFillGithub
            case 'AiFillLinkedin': return AiFillLinkedin
            default: return BiSolidConversation
        }
    }

    return addSocialNetwork();
}