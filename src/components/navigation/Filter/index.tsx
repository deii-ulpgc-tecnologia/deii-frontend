import React from "react"
import { TagModel } from "@db/generics"
import { useFormik } from "formik";
import { SlArrowLeft, } from 'react-icons/sl'
import { AiOutlineSearch, } from 'react-icons/ai'
import CategoryBadge from "./components/CategoryBadge";
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
    categories: TagModel[];
}

interface Props extends Partial<SearchParams> {
    setSearchParams: (sp: SearchParams) => void;
    tags: TagModel[]
}

export default function Filter({
    searchPhrase,
    categories,
    tags,
    setSearchParams
}: Props) {

    const formik = useFormik({
        initialValues: {
            searchPhrase: searchPhrase ?? '',
            selectedCategoriesNames: categories?.map(tag => tag.name) ?? []
        },
        onSubmit() { },
    })

    const selectedCategories: TagModel[] = []

    formik.values.selectedCategoriesNames.forEach(categoryName => {
        for (let tag of tags) {
            if (tag.name === categoryName)
                selectedCategories.push(tag)
        }
    })

    console.log({
        searchPhrase: formik.values.searchPhrase,
        categories: selectedCategories
    })

    setSearchParams({
        searchPhrase: formik.values.searchPhrase,
        categories: selectedCategories
    })

    return (
        <Stack>
            <InputGroup
                borderRadius={'35%'}
                size='md'>
                <InputLeftElement pointerEvents='none'>
                    <Icon color={'gray.500'} as={AiOutlineSearch} />
                </InputLeftElement>
                <Input
                    name={'searchPhrase'}
                    onChange={formik.handleChange}
                    placeholder='Buscar...' />
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
                                        type="checkbox"
                                        name="selectedCategoriesNames"
                                    >
                                        {tag.name}
                                    </MenuItemOption>
                                ))}
                            </MenuOptionGroup>
                        </MenuList>
                    </Menu>
                </InputRightElement>
            </InputGroup >

            {selectedCategories.map(category => (
                <CategoryBadge
                    key={category.name}
                    category={category}
                    removeCategory={() => (
                        formik.setFieldValue(
                            'selectedCategories',
                            formik.values.selectedCategoriesNames.filter(
                                categoryName => categoryName !== category.name
                            )
                        )
                    )}
                />
            ))}


        </Stack>
    )
}
