import React, { useState } from 'react'
import { News } from '../../../types/db/new'
import { Heading, Card, CardBody, Text, CardFooter, Image, Stack, Avatar, Badge,
         VStack, CardHeader } from '@chakra-ui/react'
import moment from 'moment'
import Link from "next/link"

interface Props {
    obj: News
}

function NewsCard({ obj }: Props) {

    return (
        <Card
            align={'center'}
            direction={'column'}
            justify={'flex-start'}
            p={'.6rem'}
            borderRadius={'1.2rem'}
            boxShadow={'base'}
            w={'28rem'}
            h={'32rem'}
            as={Link}
            prefetch={false}
            replace href={`/news/${obj.id}`}>
            <CardHeader p={'0'} w={'100%'}>
                <Image
                    src={obj.thumbnail}
                    alt={obj.title}
                    borderRadius={'1.2rem'}/>
            </CardHeader>
            <CardBody p={'0'} px={'1rem'} pt={'1rem'} w={'100%'}>
                <Stack
                    align={'flex-start'}
                    direction={'row'}
                    wrap={'wrap'} >
                    {obj.tags.map(tag => (
                        <Badge
                        key={tag.name}
                        colorScheme={tag.color} 
                        borderRadius={'.3rem'}
                        px={'1rem'}
                        py={'.2rem'}
                        fontSize={'.7em'}
                        mr={'.1rem'}>
                            {tag.name}
                        </Badge>
                    ))}
                </Stack>
                <Heading mt={'.5rem'} fontSize={'1.8em'}>
                    {obj.title}
                </Heading>
            </CardBody>
            <CardFooter
                display={'flex'} 
                flexDirection={'row'}
                mb={'.5rem'}
                w={'100%'}>
                <Avatar 
                    src={obj.author.avatar}
                    name={obj.author.name}
                    borderRadius={'100%'}
                    boxSize={'2rem'}
                    mt={'.5rem'}/>
                <VStack pl={'1rem'} spacing={'0'} mt={'.5rem'}>
                    <Text 
                        fontSize={'.8em'}
                        fontWeight={'bold'}
                        mr={'auto'}>
                        {obj.author.name}
                    </Text>
                    <Text
                        fontSize={'.6em'}
                        color={'gray'}
                        flexWrap={'wrap'}
                        mr={'auto'}>
                        {obj.author.rol ?? ""}
                    </Text>
                </VStack>
                <Text
                    mt={'1.1rem'}
                    color={'gray'}
                    fontSize={'1em'}
                    ml={'auto'}
                    minW={'fit-content'}>
                    {moment(obj.created).locale("es").fromNow()}
                </Text>
            </CardFooter>
        </Card>
    )

}

export default NewsCard
