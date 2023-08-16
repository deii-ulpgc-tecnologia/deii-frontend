import React from "react"
import { TagModel } from "@db/generics"
import { useFormik } from "formik";
import { SlArrowLeft, } from 'react-icons/sl'
import { AiOutlineSearch, } from 'react-icons/ai'
import SelectedCategories from "./components/SelectedCategories";
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
    Stack,
} from '@chakra-ui/react'

export interface SearchParams {
    searchPhrase: string;
    category: TagModel;
}

interface Props extends SearchParams {
    setSearchParams: (sp: SearchParams) => void;
    tags: TagModel[]
}

export default function Filter({
    searchPhrase,
    category,
    tags,
    setSearchParams
}: Props) {

    const formik = useFormik({
        initialValues: {
            searchPhrase: searchPhrase ?? '',
            categories: category !== undefined ? [category] : []
        },
        onSubmit() { },
    })

    return (
        <Stack>
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

            <SelectedCategories selectedCategories={tags} />

        </Stack>
    )
}
