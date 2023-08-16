import React from "react"
import { TagModel } from "@db/generics"
import { useFormik } from "formik";
import { SlArrowLeft, } from 'react-icons/sl'
import { AiOutlineSearch, } from 'react-icons/ai'
import { BiCheckbox } from 'react-icons/bi'
import {
    Divider,
    Input,
    Menu,
    MenuButton,
    MenuList,
    MenuItemOption,
    Button,
    Icon,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    MenuOptionGroup,
    Checkbox,
} from '@chakra-ui/react'

export interface SearchParams {
    searchPhrase: string;
    category: TagModel;
    tags: TagModel[]
}

type OptionalExcept<T, K extends keyof T> = Partial<Omit<T, K>> & Pick<T, K>

interface Props extends OptionalExcept<SearchParams, 'tags'> {
    setSearchParams: (sp: SearchParams) => void;
}

export default function Filter({
    searchPhrase,
    category,
    tags,
    setSearchParams
}: Props) {

    const formik = useFormik({
        initialValues: {
            searchPhrase: searchPhrase ?? ''
        },
        onSubmit() { },
    })

    return (
        <InputGroup
            borderRadius={'35%'}
            size='md'>
            <InputLeftElement pointerEvents='none'>
                <Icon color={'gray.500'} as={AiOutlineSearch} />
            </InputLeftElement>
            <Input placeholder='Buscar...' />
            <InputRightElement w={'8.8rem'} >
                <Divider h={'1.75rem'} orientation="vertical" />
                <Menu
                    preventOverflow={true}
                    boundary={'scrollParent'}
                    closeOnSelect={false}>
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
                                >
                                    {tag.name}
                                </MenuItemOption>
                            ))}
                        </MenuOptionGroup>
                    </MenuList>
                </Menu>
            </InputRightElement>
        </InputGroup >
    )
}
