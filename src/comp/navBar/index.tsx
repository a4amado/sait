import {
    Flex,
    Center,
    Menu,
    MenuButton,
    MenuList,
    Button,
    MenuItem,
    Heading,
} from '@chakra-ui/react'
import Link from 'next/link'

import { FcMenu } from 'react-icons/fc'
import { TbLogin } from 'react-icons/tb'
import { BsFillMicFill } from 'react-icons/bs'

export default function NavBar() {
    return (
        <>
            <Flex className="flex flex-col flex-grow-0 bg-white z-[5]">
                <Flex className="w-full justify-strctch flex flex-row-reverse h-15 z-[5]">
                    <Flex className="h-15 flex-grow-0">
                        <Center className="w-full">
                            <Menu>
                                {({ isOpen }) => (
                                    <>
                                        <MenuButton
                                            as={Button}
                                            isActive={isOpen}
                                        >
                                            <FcMenu />
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem className="p-0 m-0">
                                                <Link
                                                    className="w-full px-1 py-2"
                                                    href="/contribute"
                                                >
                                                    <BsFillMicFill className="inline m-1" />
                                                    شارك بصوتك
                                                </Link>
                                            </MenuItem>
                                            <MenuItem className="p-0">
                                                <Link
                                                    className="inline m-1"
                                                    href="/auth"
                                                >
                                                    <TbLogin className="inline m-1" />
                                                    الدخول
                                                </Link>
                                            </MenuItem>
                                        </MenuList>
                                    </>
                                )}
                            </Menu>
                        </Center>
                    </Flex>
                    <Flex className="flex-grow-1 w-full justify-star">
                        <Heading size="lg">
                            <Link href="/">قٌلها</Link>
                        </Heading>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
