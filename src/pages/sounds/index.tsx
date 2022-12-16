import { Input, Flex, Center, Button, useToast } from '@chakra-ui/react'
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
import Head from 'next/head'
import { TbCopy } from 'react-icons/tb'

function copy_to_clipboard(text: string): void {
    navigator.clipboard.writeText(text)
}

export default function Page() {
    const toast = useToast()
    return (
        <PageContainer>
            <Head>
                <title>كيف اقول أنا</title>
            </Head>
            <>
                <Flex className="flex flex-col w-full">
                    <Search />
                    <Flex className="flex flex-col">
                        {Array.from({ length: 30 }, () =>
                            Math.random().toString()
                        ).map((_, i) => {
                            return (
                                <Flex
                                    key={i}
                                    border="1px solid #0088000f"
                                    className="m-1 p-1 h-12 flex align-center justify-center hover:pointe"
                                >
                                    <Flex className="h-full w-12 flex-grow-0">
                                        <Center className="h-full w-full">
                                            <Button
                                                _hover={{
                                                    borderColor: '#1677ff',
                                                    color: '#1677ff',
                                                }}
                                                className="p-1 border-spacing-1 border-cyan-200"
                                            >
                                                <HiOutlineSpeakerWave />
                                            </Button>
                                        </Center>
                                    </Flex>
                                    <Flex className="my-0 mx-2 text-3xl flex-grow w-full">
                                        مَثال
                                        <Button
                                            onClick={() => {
                                                copy_to_clipboard('TEXT')
                                                toast({
                                                    status: 'success',
                                                    title: 'تَم النَسخ',
                                                    isClosable: false,
                                                    duration: 2000,
                                                    position: 'top-right',
                                                })
                                            }}
                                            variant="ghost"
                                        >
                                            <TbCopy />
                                        </Button>
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
