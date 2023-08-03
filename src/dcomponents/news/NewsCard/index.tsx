import React, { useState } from 'react'
import { News } from '../../../types/db/new'
import { Heading, Card, CardBody, Text, CardFooter, Image, Stack, Avatar, Badge, VStack } from '@chakra-ui/react'
import moment from 'moment'

interface Props {
    obj : News
}

function NewsCard({ obj }: Props) {

    return (   
    <Card p={'1em'} borderRadius={'1.5em'} boxShadow={'base'} w={'40em'} minH={'fit-content'}>
        <Image src={obj.thumbnail} alt={obj.title} borderRadius={'1.5em'} h={'25em'}/>
        <CardBody px={'1.5em'}>
            <Stack direction={'row'} my={'0.5em'} minH={'fit-content'} wrap={'wrap'} >
                {obj.tags.map(tag => (
                    <Badge colorScheme={tag.color} borderRadius={'0.5em'} px={'1.5em'} py={'0.3em'} fontSize={'1em'} mr={'0.5em'}>
                        {tag.name}
                    </Badge>
                ))}
            </Stack>
            <Heading mt={'0.8em'} fontSize={'2.5em'}>
                {obj.title}
            </Heading>
        </CardBody>
        <CardFooter display={'flex'} flexDirection={'row'} mb={'0.5em'}>
            <Avatar src={obj.author.avatar} name={obj.author.name} borderRadius={'100%'} boxSize={'3em'}/>
            <VStack px={'1.2em'} spacing={'0em'}>
                <Text fontSize={'1.2em'} fontWeight={'bold'} pt={'0.2em'} mr={'auto'}>
                    {obj.author.name}
                </Text>
                {obj.author.isHonorary &&
                    <Text fontSize={'1em'} color={'gray'} mr={'auto'} flexWrap={'wrap'}>
                        Delegado honorífico
                    </Text>
                }
            </VStack>
            <Text pt={'0.2em'} color={'gray'} fontSize={'1.4em'} ml={'auto'} pr={'0.3em'} pl={'2em'} minW={'fit-content'}>
                {moment(obj.created).locale("es").fromNow()}
            </Text>
        </CardFooter>
    </Card>
    )
    
}

export default NewsCard
