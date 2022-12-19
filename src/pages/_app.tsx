import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ChakraProvider, PortalManager } from '@chakra-ui/react'
import Loading from '../comp/loading'
import React, { Suspense } from 'react'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import rtl from 'stylis-plugin-rtl'

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => (
    <Suspense fallback=".">
        <ChakraProvider>
            <CacheProvider
                value={createCache({ key: 'css-ar', stylisPlugins: [rtl] })}
            >
                <PortalManager>
                    <Loading />
                    <Component {...pageProps} />
                </PortalManager>
            </CacheProvider>
        </ChakraProvider>
    </Suspense>
)

export default MyApp
