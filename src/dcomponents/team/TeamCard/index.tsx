"use client"

import React from 'react'
import { Delegate } from '../../../types/db/delegate'
import { Box, Card, CardBody, Flex, Grid, Image, Text, Circle, Link, Icon } from '@chakra-ui/react'
import DelegateIsHonorary from './components/DelegateIsHonorary';
import DelegateSocialNetworks from './components/DelegateSocialNetworks';
interface Props {
    obj : Delegate
}

export default function TeamCard({obj}: Props) {
    return (
        /* A la hora de implementarlo puede que haya que cambiar la altura del componente a 100% */
        <Card w={obj.isHonorary ? '350px' :'290px'} h={obj.isHonorary ? '385px' :'300px'} borderRadius='50px' boxShadow='0px 4px 65px 0px rgba(0, 0, 0, 0.1)' transition={'all .4s ease-in-out'}>
            <CardBody>
                <Grid justifyItems='center' alignItems= 'center' h='100%'>
                    <Box position='relative'>
                        <DelegateIsHonorary isHonorary={obj.isHonorary}></DelegateIsHonorary>
                        <Image w={obj.isHonorary ? '200px' :'150px'} h={obj.isHonorary ? '200px' :'150px'} marginBottom='5' objectFit='cover' src={obj.avatar} alt={"Avatar de " + obj.name} borderRadius='50%'/> 
                    </Box>
                    <Grid justifyItems='center' alignItems= 'center'>
                        <Text fontSize='lg' fontWeight='bolder'>{obj.name ? obj.name : ''}</Text>
                        <Text fontSize='md' color='#6F6F6F'>{obj.rol ? obj.rol : ''}</Text>
                    </Grid>
                    <Flex marginTop='5' columnGap='5px' h='50'>
                        <DelegateSocialNetworks socialNetworks={obj.socialNetworks} size={25} sizeHover={50}></DelegateSocialNetworks>
                    </Flex>
                </Grid>
            </CardBody>
        </Card>
    )
}