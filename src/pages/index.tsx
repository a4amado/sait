import { Button, Input, Flex } from '@chakra-ui/react'
import Head from 'next/head'

import PageContainer from '../comp/pageContainer'
import Search from '../comp/search'

export default function Page() {
    return (
        <PageContainer>
            <Head>
                <title>Sait\ قلها</title>
            </Head>
            <Search />
        </PageContainer>
    )
}
