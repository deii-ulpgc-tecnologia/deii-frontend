import React, { useState } from 'react'
import { News } from '../../../types/db/new'
import { Heading, Box, Card, CardBody, Text, CardFooter, Image, Stack } from '@chakra-ui/react'

interface Props {
    obj : News
}

function NewsCard({ obj }: Props) {
    const [isHover, setIsHover] = useState(false)

    return (
        <Box onMouseOver={() => setIsHover(true)} 
             onMouseOut={() => setIsHover(false)}>
                <Card borderRadius='15px'>
                    <Image
                        src={obj.thumbnail}
                        alt={obj.title}
                        borderRadius='15px'
                        boxSize='300px'
                        objectFit='cover'/>
                    <CardBody>
                        <Heading>Lorem ipsum science lorem ipsum science</Heading>
                    </CardBody>
                    <CardFooter>
                        <Image
                            src={obj.author.avatar}
                            borderRadius='full'
                            boxSize='75px'
                        />
                        <Stack>
                            <Text>{obj.author.name}</Text>
                            <Text>Mi señor bello</Text>
                        </Stack>
                    </CardFooter>
                </Card>
        </Box>
    )
}

export default NewsCard
