import React from 'react'
import { FaqTag } from '../../../types/db/faq'
import { Button, Heading, Image, Text } from '@chakra-ui/react'
import Link from "next/link"

interface Props {
    obj : FaqTag
}

function FaqTagCard({obj}: Props) {
    return (
        <Button
            boxSize={'20rem'}
            flexDirection={'column'}
            alignContent={'center'}
            borderRadius={'2rem'}
            bgColor={'white'}
            borderColor={'light-gray'}
            borderWidth={'.15rem'}
            as={Link}
            prefetch={false}
            replace href={`/faqs/${obj.id}`}>
            <Image
                src={obj.icon}
                alt={obj.name}
                borderRadius={'100%'}
                boxSize={'7rem'}
                objectFit={'cover'}/>
            <Heading
                fontSize={'1.7em'}
                pt={'1rem'}
                color={'black'}>
                {obj.name}
            </Heading>
        </Button>
    )
}

export default FaqTagCard
