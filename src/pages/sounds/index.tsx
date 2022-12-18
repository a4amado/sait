import Head from 'next/head'
import React from 'react'

import { Flex } from '@chakra-ui/react'

import PageContainer from '../../comp/pageContainer'
import Search from '../../comp/search'
import SoundBar from '../../comp/soundbar'

export default function Page() {
    return (
        <PageContainer>
            <Head>
                <title>كيف اقول أنا</title>
            </Head>
            <>
                <Flex className="flex flex-col w-full">
                    <Search />
                    <Flex className="flex flex-col">
                        {Array.from({ length: 7 }, () =>
                            Math.random().toString()
                        ).map((_, i) => (
                            <SoundBar
                                key={i.toString()}
                                soundID="/clbtcd5fj0000356l9wcve9nq"
                            />
                        ))}
                    </Flex>
                </Flex>
            </>
        </PageContainer>
    )
}
