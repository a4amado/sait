import { Flex, Center } from "@chakra-ui/react";
import { Button } from "antd";
import React from "react";
import { FcMenu } from "react-icons/fc";
import { HiLanguage } from "react-icons/hi2";


export default function PageContainer({ children }: React.PropsWithChildren) {
    return <Flex w="100%" height="100%" maxH="100vh" maxW="600px" display="flex" flexDir="column" mx="auto" px="20px" boxShadow="0px 0px 18px -1px rgba(94,94,94,0.46)">
        <Flex flexDirection="column" display="flex" flexGrow={0} background="#fff" zIndex={5}>
            <Flex w="full" justifyContent="stretch" flexDirection="row" height="65px" zIndex={5}>
                <Flex flexGrow={0} w="65px">
                    <Center w="full">
                        <Button onClick={console.log}><FcMenu /></Button>
                    </Center>
                </Flex>
                <Flex flexGrow={1}>
                    <Center w="full">Sait</Center>
                </Flex>
                <Flex flexGrow={0} w="65px">
                    <Center w="full">
                        <Button onClick={console.log}><HiLanguage /></Button>
                    </Center>
                </Flex>
            </Flex>
            <Flex w="full">
                {children}
            </Flex>
        </Flex>
    </Flex>

}