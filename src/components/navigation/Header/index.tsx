"use client"

import { Flex, Box, Button } from "@chakra-ui/react"
import React from "react"
import HeaderLink from "./components/HeaderLink"
import HeaderLinkOption from "./components/HeaderLinkOption"
import { IoPeople, IoGitBranch, IoEarth, IoCashOutline, IoReceiptSharp, IoCalendar, IoRibbonSharp, IoSchool } from "react-icons/io5"
import { MdSwitchAccount } from "react-icons/md"
import Image from 'next/image'
import logo from '/public/images/logo.png'

export default function Header() {
    return (
        <Box shadow='lg-soft' w="100%" bgColor="white" position="fixed" px="5" py="5" display="flex" justifyContent="space-between" alignItems="center">
            <Flex gap="16">
                <Image width={110} alt='Logo de la delegación' src={logo}></Image>
                <HeaderLink title="Delegacion" path='/home'>
                    <HeaderLinkOption path='/home' title="¿Quienes somos?" icon={IoPeople} />
                    <HeaderLinkOption path='/home' title="Nuestros servicios" icon={IoGitBranch} />
                </HeaderLink>
                <HeaderLink title="Tramites" cols={2} popoverWidth={600} path='/processes'>
                    <HeaderLinkOption title="Movilidad" icon={IoEarth} path='/processes/mobility' />
                    <HeaderLinkOption title="Becas y ayudas" icon={IoCashOutline} path='/processes/scholarships/' />
                    <HeaderLinkOption title="Tramites universitarios" icon={IoReceiptSharp} path='/processes/general/' />
                    <HeaderLinkOption title="Plazos de interes" icon={IoCalendar} path='/processes/deadlines/' />
                    <HeaderLinkOption title="Cambio de grupo" icon={MdSwitchAccount} path='/processes/groups/' />
                    <HeaderLinkOption title="Reconocimiento de creditos" icon={IoRibbonSharp} path='/processes/ects/' />
                    <HeaderLinkOption title="Matriculas" icon={IoSchool} path='/processes/enrollment/' />
                </HeaderLink>
                <HeaderLink title="Noticias" path='/news' />
                <HeaderLink title="Guía de supervivencia" path='/survivalGuide' />
                <HeaderLink title="FAQs" path='/faqs' />
            </Flex>
            <Button colorScheme="secondary" variant='solid' fontWeight="semibold">
                Tengo un problema
            </Button>
        </Box >
    )
}
