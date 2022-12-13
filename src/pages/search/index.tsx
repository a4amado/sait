import { Input, Flex, Center, Button, Link } from '@chakra-ui/react'
import PageContainer from '../../comp/pageContainer'

import Search from '../../comp/search'
import NextLink from 'next/link'

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
                                <Button
                                    margin="4px 0"
                                    key={i}
                                    as={NextLink}
                                    href="/sounds?id=:ID"
                                    passHref
                                >
                                    كَلمة عربية.{' '}
                                </Button>
                            )
                        })}
                    </Flex>
                </Flex>
            </>
        </PageContainer>
    )
}
