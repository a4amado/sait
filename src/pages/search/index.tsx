import { Flex, Button } from '@chakra-ui/react'
import PageContainer from '../../comp/pageContainer'

import Search from '../../comp/search'
import NextLink from 'next/link'
import Head from 'next/head'

export default function Page() {
    return (
        <PageContainer>
            <>
                <Head>
                    <title>أنا</title>
                </Head>
                <Flex className="flex flex-col w-full">
                    <Search />
                    <Flex className="flex flex-col">
                        {Array.from({ length: 30 }, () =>
                            Math.random().toString()
                        ).map((_, i) => {
                            return (
                                <Button
                                    className="my-1"
                                    key={i}
                                    as={NextLink}
                                    href="/sounds?id=:ID"
                                    passHref
                                >
                                    كَلمة عربية.
                                </Button>
                            )
                        })}
                    </Flex>
                </Flex>
            </>
        </PageContainer>
    )
}
