import { Input, Flex, Center, Button } from '@chakra-ui/react'
import PageContainer from '../../comp/pageContainer'
import { HiOutlineSpeakerWave } from 'react-icons/hi2'
import Search from '../../comp/search'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'

export default function Page() {
    return (
        <PageContainer>
            <>
                <Flex display="flex" flexDirection="column" width="full">
                    <Search />
                    <Flex display="flex" flexDirection="column">
                        {Array.from({ length: 3 }, () =>
                            Math.random().toString()
                        ).map((_, i) => {
                            return (
                                <Flex
                                    key={i}
                                    border="1px solid #0088000f"
                                    _hover={{
                                        backgroundColor: '#9ca3af3b',
                                        cursor: 'pointer',
                                    }}
                                    justifyContent="stretch"
                                    alignItems="center"
                                    display="flex"
                                    height="50px"
                                    padding="5px"
                                    margin="5px"
                                    borderRadius="5px"
                                >
                                    <Flex width="50px" flexGrow={0}>
                                        <Center w="full" h="50px">
                                            <Button
                                                border="1px solid #0040a9"
                                                _hover={{
                                                    borderColor: '#1677ff',
                                                    color: '#1677ff',
                                                }}
                                                padding="5px"
                                            >
                                                <HiOutlineSpeakerWave />
                                            </Button>
                                        </Center>
                                    </Flex>
                                    <Flex
                                        w="full"
                                        flexGrow={1}
                                        fontSize="3xl"
                                        margin="0 10px"
                                    >
                                        مَثال
                                    </Flex>

                                    <Flex>
                                        <Popover>
                                            <PopoverTrigger>
                                                <Button>قَيّم</Button>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverArrow />
                                                <PopoverCloseButton />
                                                <PopoverHeader>
                                                    ما تَقييمك لهذا النُطق ؟
                                                </PopoverHeader>
                                                <PopoverBody>
                                                    <Flex
                                                        width="full"
                                                        display="flex"
                                                        flexDirection="row"
                                                        justifyContent="space-evenly"
                                                    >
                                                        <Button>
                                                            لا غُبار علية.
                                                        </Button>
                                                        <Button>
                                                            لابأس به.
                                                        </Button>
                                                        <Button>رديء</Button>
                                                    </Flex>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </Flex>
                                </Flex>
                            )
                        })}
                    </Flex>
                </Flex>
            </>
        </PageContainer>
    )
}
