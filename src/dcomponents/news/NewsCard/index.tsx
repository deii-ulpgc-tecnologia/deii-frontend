import React, { useState } from 'react'
import { News } from '../../../types/db/new'
import { Heading, Card, CardBody, Text, CardFooter, Image, Stack, Divider, Avatar, Badge } from '@chakra-ui/react'

interface Props {
    obj : News
}

function NewsCard({ obj }: Props) {
    // const [isHover, setIsHover] = useState(false)
    // const badgeItems = obj.tags((tag) => <Badge>{tag}</Badge>)

    return (
        // <Box onMouseOver={() => setIsHover(true)}
        //      onMouseOut={() => setIsHover(false)}>
        // </Box>
        
    <Card padding={'0.70em'} borderRadius={'20px'}>
        <Image src={obj.thumbnail} alt={obj.title} borderRadius={'20px'}/>
        <CardBody px={'4vw'}>
            <Stack direction={'row'}>   
                {/* TODO: Buscar la forma de recorrer los tags que son de tipo NewsTag.
                          Aplicarle el estilo de la tag.*/}
                {
                    obj.tags.map(tag => (
                        <Badge colorScheme={tag.color} borderRadius={'5px'} px={'2vw'} py={'0.5vh'} fontSize={'0.7em'}>
                            {tag.name}
                        </Badge>
                    ))  
                }
            </Stack>
            <Heading py={'1%'}>
                {obj.title}
            </Heading>
        </CardBody>
        <CardFooter display={'flex'} flexDirection={'row'} alignContent={'space-between'}>
            <Avatar
                src={obj.author.avatar}
                name={obj.author.name}
                borderRadius='100%'
                margin='1vh 1vw 1vh 1vw'
                boxSize='2em'
            />
            <Stack display={'flex'} flexDirection={'column'} px={'2vw'}>
                <Text
                    fontSize='0.9em'
                    fontWeight={'bold'}
                    position={'absolute'}
                    padding={'1vh 0vw 0vh 0vw'}
                    zIndex={1}
                >
                    {obj.author.name}
                </Text>
                    {obj.author.isHonorary &&
                        <Text
                            fontSize='0.7em'
                            position={'absolute'}
                            padding={'4vh 0vw 0vh 0vw'}
                            zIndex={2}
                            color={'light-gray'}
                        >
                            Delegado honorífico
                        </Text>
                    }
            </Stack>
            <Text >
                {new Date(obj.created).toDateString()}
            </Text>
        </CardFooter>
    </Card>

    )
}

export default NewsCard
