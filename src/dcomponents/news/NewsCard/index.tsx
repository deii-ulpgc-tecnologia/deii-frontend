import React, { useState } from 'react'
import { News } from '../../../types/db/new'
import { Heading, Box } from '@chakra-ui/react'

interface Props {
    obj : News
}

function NewsCard({ obj }: Props) {
    const [isHover, setIsHover] = useState(false)

    return (
        <Box onMouseOver={() => setIsHover(true)} 
             onMouseOut={() => setIsHover(false)}>
            {isHover? <NewsCardHovered obj={obj}/>: <NewsCardDefault obj={obj}/>}
        </Box>
    )
}

function NewsCardHovered({ obj }: Props){
    return (
        <Heading>{obj.author.name}</Heading>
    )
}

function NewsCardDefault({ obj }: Props){
    return (
        <Heading>{obj.title}</Heading>
    )
}

export default NewsCard
