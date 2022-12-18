import React from 'react'
import { HiOutlineSpeakerWave } from 'react-icons/hi2'
import { TbCopy } from 'react-icons/tb'

import { Button, Center, Flex, Skeleton, useToast } from '@chakra-ui/react'

import RateSoundPopOver from '../rate_sound_popover'
import useFireBaseAudioURL from '../../hooks/useFireBaseAudioURL'

interface SoundBarContext {
    key: string
    soundID: string
}

export default function SoundBar(ctx: SoundBarContext) {
    const toast = useToast()
    const url = useFireBaseAudioURL({
        path: '/clbtd97500000356fpwc9p0s5',
    })

    if (url.isLoading) {
        return (
            <Flex
                key={ctx.key}
                border="1px solid #0088000f"
                className="m-1 p-1 h-12 flex align-center justify-center hover:pointe"
            >
                <Skeleton className="w-dull h-full" isLoaded={url.isLoading}>
                    لحظةََ من فضلك
                </Skeleton>
            </Flex>
        )
    }

    return (
        <Flex
            key={ctx.key}
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
                        onClick={() => {
                            const aud = new Audio(url.url)
                            aud.play()
                        }}
                    >
                        <HiOutlineSpeakerWave />
                    </Button>
                </Center>
            </Flex>
            <Flex className="my-0 mx-2 text-3xl flex-grow w-full">
                مَثال
                <Button
                    onClick={() => {
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
                <RateSoundPopOver />
            </Flex>
        </Flex>
    )
}
