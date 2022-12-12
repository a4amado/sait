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
                                                <MenuItem padding="0">
                                                    <Link
                                                        style={{
                                                            padding: '5px 10px',
                                                        }}
                                                        href="/contribute"
                                                    >
                                                        شارك بصوتك
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem padding="0">
                                                    <Link
                                                        style={{
                                                            padding: '5px 10px',
                                                        }}
                                                        href="/auth"
                                                    >
                                                        الدخول
                                                    </Link>
                                                </MenuItem>
                                            </MenuList>
                                        </>
                                    )
                                }}
                            </Menu>
                        </Center>
                    </Flex>
                    <Flex flexGrow={1}>
                        <Center w="full">
                            <Link href="/">Sait</Link>
                        </Center>
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
