import {
    Flex,
    Center,
    Menu,
    MenuButton,
    MenuList,
    Button,
    MenuItem,
    MenuProps,
    Heading,
} from '@chakra-ui/react'
import Link from 'next/link'

import { FcMenu } from 'react-icons/fc'
import { TbLogin } from 'react-icons/tb'
import { BsFillMicFill } from 'react-icons/bs'
import { HiHome } from 'react-icons/hi2'

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
                    flexDirection="row-reverse"
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
                                                            width: '100%',
                                                        }}
                                                        href="/contribute"
                                                    >
                                                        <BsFillMicFill
                                                            style={{
                                                                display:
                                                                    'inline',
                                                                margin: '5px',
                                                            }}
                                                        />
                                                        شارك بصوتك
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem padding="0">
                                                    <Link
                                                        style={{
                                                            padding: '5px 10px',
                                                            width: '100%',
                                                        }}
                                                        href="/auth"
                                                    >
                                                        <TbLogin
                                                            style={{
                                                                display:
                                                                    'inline',
                                                                margin: '5px',
                                                            }}
                                                        />
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
                        <Center w="full" justifyContent="flex-start">
                            <Heading size="lg">
                                <Link href="/">قٌلها</Link>
                            </Heading>
                        </Center>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
