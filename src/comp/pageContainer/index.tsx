import { Flex, Center } from '@chakra-ui/react'
import { Button } from 'antd'
import React from 'react'
import { FcMenu } from 'react-icons/fc'
import { HiLanguage } from 'react-icons/hi2'
import NavBar from '../navBar'

export default function PageContainer({ children }: React.PropsWithChildren) {
    return (
        <Flex className="w-dull max-w-2xl flex flex-col mx-auto p-3 justify-stretch min-h-full shadow-2xl">
            <NavBar />
            <Flex className="w-full h-full flex-grow">{children}</Flex>
        </Flex>
    )
}
