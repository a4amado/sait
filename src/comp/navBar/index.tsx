import {
    Flex,
    Center,
    Menu,
    MenuButton,
    MenuList,
    Button,
    MenuItem,
    MenuProps,
} from '@chakra-ui/react'
import Link from 'next/link'

import { FcMenu } from 'react-icons/fc'
import { HiLanguage } from 'react-icons/hi2'

export default function NavBar() {
    return (
        <>
            <Flex
                flexDirection="column"
                display="flex"
                flexGrow={0}
                background="#fff"
                zIndex={5}
            >
                <Flex
                    w="full"
                    justifyContent="stretch"
                    flexDirection="row"
                    height="65px"
                    zIndex={5}
                >
                    <Flex flexGrow={0} w="65px">
                        <Center w="full">
                            <Menu>
                                {({ isOpen }) => {
                                    return (
                                        <>
                                            <MenuButton
                                                as={Button}
                                                isActive={isOpen}
                                            >
                                                <FcMenu />
                                            </MenuButton>
                                            <MenuList css={``}>
                                                <MenuItem>
                                                    <a href="/contribute">
                                                        شارك بصوتك
                                                    </a>
                                                </MenuItem>
                                                <MenuItem>
                                                    <a href="/auth">
                                                        الدخول
                                                    </a>
                                                </MenuItem>
                                            </MenuList>
                                        </>
                                    )
                                }}
                            </Menu>
                        </Center>
                    </Flex>
                    <Flex flexGrow={1}>
                        <Center w="full">Sait</Center>
                    </Flex>
                    <Flex flexGrow={0} w="65px">
                        <Center w="full">
                            <Menu>
                                {({ isOpen }) => {
                                    return (
                                        <>
                                            <MenuButton
                                                as={Button}
                                                isActive={isOpen}
                                            >
                                                <HiLanguage />
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem>شارك بصوتك</MenuItem>
                                                <MenuItem>راجع صوتاََ</MenuItem>
                                            </MenuList>
                                        </>
                                    )
                                }}
                            </Menu>
                        </Center>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
