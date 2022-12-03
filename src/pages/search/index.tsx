import { Input, Flex, Center, Button } from "@chakra-ui/react";
import Router from "next/router";
import PageContainer from "../../comp/pageContainer";
import { HiOutlineSpeakerWave } from "react-icons/hi2"
import *as Luxon from "luxon"
export default function Page() {

    const sss = Luxon.DateTime.now().toLocaleString({ year: "2-digit", month: "short", day: "numeric" })
    return <PageContainer>
        <>

            
            <Flex display="flex" flexDirection="column" width="full">
            <form method="GET" action="/search" style={{ width: "100%" }}>
                <Input type="text" name="q" />
                <Button mx="auto" type="submit" margin="10px auto" display="block">Search</Button>
            </form>
            <Flex  display="flex" flexDirection="column">
                {
                    Array.from({ length: 10 }, () => Math.random().toString()).map((e, i) => {
                        return <Flex border="1px solid #0088000f" _hover={{ backgroundColor: "#9ca3af3b", cursor: "pointer" }} justifyContent="stretch" alignItems="center" display="flex" height="50px" padding="5px" borderRadius="5px">

                            <Flex w="full" flexGrow={1}  fontSize="3xl" margin="0 10px" justifyContent="end" >مَثال</Flex>

                            <Flex width="50px"  flexGrow={0}>
                                <Center w="full" h="50px">
                                    <Button border="1px solid #0040a9" _hover={{ borderColor: "#1677ff", color: "#1677ff"}} padding="5px">
                                        <HiOutlineSpeakerWave />
                                    </Button>
                                </Center>
                            </Flex>
                        </Flex>
                    })
                }
                </Flex>
            </Flex>
        </>

    </PageContainer>
}
