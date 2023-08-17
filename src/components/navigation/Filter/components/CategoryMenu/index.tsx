import {
    Menu,
    MenuList,
    MenuButton,
    MenuOptionGroup,
    MenuItemOption,
    Button,
    Icon,
    Checkbox
} from "@chakra-ui/react"
import { TagModel } from "@db/generics"
import { useState } from "react";

interface Props {
    tags: TagModel[];
}

export default function CategoryMenu({ tags }: Props) {

    function onCheckboxChange(index: number) {

    }


    const [isSelected, setIsSelected] = useState<boolean[]>(Array.apply(false, new Array(5)))



    return (
        <Menu>
            <MenuButton as={Button} pl={'.5em'} mr={'0'}
                w={'calc(100% - .2em)'}
                h={'95%'}
                rightIcon={<Icon boxSize={'.6em'} as={SlArrowLeft} />}
                background={'none'}
                textColor={'gray.500'}
                fontWeight={'normal'}>
                Categorías
            </MenuButton>
            <MenuList>
                <MenuOptionGroup type='checkbox'>
                    {tags.map(tag => (
                        <MenuItemOption
                            value={tag.name}
                            key={tag.name}
                            colorScheme="secondary"
                            as={Checkbox}
                            onChange={() => { }}
                        >
                            {tag.name}
                        </MenuItemOption>
                    ))}
                </MenuOptionGroup>
            </MenuList>
        </Menu >
    )
}
