import {
    Flex,
    Badge,
    Text,
    Button,
    Icon,
    Center
} from "@chakra-ui/react";
import { TagModel } from "@db/generics";
import { RxCross1 } from "react-icons/rx";

interface Props {
    category: TagModel;
    removeCategory: () => void
}

export default function CategoryBadge({
    category,
    removeCategory
}: Props) {

    return (
        <Badge
            key={category.name}
            borderRadius={'lg'}
            pl={'.5em'}
            pr={0}
            textTransform={'none'}
            colorScheme={category.color}>
            <Flex
                align='center'
                gap={1}
                justify={'space-between'}>
                <Text>
                    {category.name}
                </Text>
                <Button
                    onChange={removeCategory}
                    as={Center}
                    size={'xs'}
                    p={0}
                    _hover={{
                        bg: `${category.color}.200`
                    }}
                    bg='none'>
                    <Icon as={RxCross1} />
                </Button>
            </Flex>
        </Badge>

    )
}
