import { AspectRatio, Avatar, Box, Center } from '@chakra-ui/react';
import Image from 'next/image'
import React from 'react'
import honorificIcon from '/src/assets/honorific_delegate_icon.svg'
import { Delegate } from '../../../../../types/db/delegate';

interface Props {
    obj: Delegate
}

export default function DelegateAvatar({ obj }: Props) {

    return (
        <Center height={'100%'}>
            <Box width={'62%'} position={'relative'}>
                {obj.isHonorary &&
                    <Box
                        position={'absolute'}
                        boxSize={'25%'}
                        zIndex={2}>
                        <Image
                            src={honorificIcon}
                            alt='Honorific icon'
                            fill={true} />
                    </Box>
                }
                <AspectRatio w={'100%'} ratio={1 / 1}>
                    <Avatar
                        src={obj.avatar}
                        borderRadius={'100%'}
                    />
                </AspectRatio>
            </Box>
        </Center>
    )
}
