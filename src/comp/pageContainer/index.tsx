import { Flex, Center } from '@chakra-ui/react'
import { Button } from 'antd'
import React from 'react'
import { FcMenu } from 'react-icons/fc'
import { HiLanguage } from 'react-icons/hi2'
import NavBar from '../navBar'

export default function PageContainer({ children }: React.PropsWithChildren) {
    return (
        <Flex
            w="100%"
            height="100%"
            maxH="100vh"
            maxW="600px"
            display="flex"
            flexDir="column"
            mx="auto"
            px="20px"
            boxShadow="0px 0px 18px -1px rgba(94,94,94,0.46)"
        >
            <NavBar />
            <Flex w="full">{children}</Flex>
        </Flex>
    )
}
