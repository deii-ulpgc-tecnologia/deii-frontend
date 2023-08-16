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
    selectedCategories: TagModel[];
}

export default function SelectedCategories({ selectedCategories }: Props) {

    return (
        <Flex gap={2}>
            {selectedCategories.map(category => (
                <Badge
                    key={category.name}
                    borderRadius={'lg'}
                    p={'.5em'}
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
            ))}
        </Flex>
    )
}
