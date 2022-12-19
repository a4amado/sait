import Head from 'next/head'
import React from 'react'

import {Flex} from '@chakra-ui/react';

import PageContainer from '../../comp/pageContainer'
import Search from '../../comp/search'


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
                        {/* {snapshot?.map((e) => {
                            console.log(JSON.stringify(e.toJSON()))
                            return (
                                <SoundBar
                                    key={cuid()}
                                    soundID={`${e?.toJSON()}`}
                                    ar={e}
                                />
                            )
                        })} */}
                    </Flex>
                </Flex>
            </>
        </PageContainer>
    )
}
