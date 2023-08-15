import React from 'react'
import { Delegate } from '../../../types/db/delegate'
import DelegateAvatar from './components/DelegateAvatar';
import DelegateSocialNetworks from './components/DelegateSocialNetworks';
import {
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    Stack,
    Text
} from '@chakra-ui/react'

interface Props {
    obj: Delegate
}

export default function TeamCard({ obj }: Props) {

    const width = obj.isHonorary ? '11rem' : '10rem'
    const height = obj.isHonorary ? '13rem' : '11rem'

    return (
        /* A la hora de implementarlo puede que haya que cambiar la altura del componente a 100% */
        <Card
            align={'center'}
            w={width}
            h={height}
            borderRadius='15%'
            transition={'all .3s ease-in-out'}
            boxShadow='md'
            _hover={{
                w: `calc(${width} + .5em)`,
                h: `calc(${height} + .5em)`
            }}>
            <CardHeader
                h={'60%'}
                w={'100%'}
                px={'1em'}
                pb={0}
                pt={'.5em'}>
                <DelegateAvatar obj={obj} />
            </CardHeader>
            <CardBody
                w={'100%'}
                h={'40%'}
                p={0}
                px={'1em'}>
                <Flex
                    h={'100%'}
                    pb={'.5em'}
                    direction={'column'}
                    align={'center'}
                    justify={'space-between'}>
                    <Stack align={'center'} spacing={'.2em'}>
                        <Heading fontSize={'x-small'}>{obj.name}</Heading>
                        <Text fontSize='xx-small' color='#6F6F6F'>
                            {obj.rol ?? ''}
                        </Text>
                    </Stack>
                    <DelegateSocialNetworks
                        socialNetworks={obj.socialNetworks}
                    />
                </Flex>
            </CardBody>
        </Card >
    )
}
