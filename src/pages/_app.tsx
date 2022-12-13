import { type AppType } from 'next/app'
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { ChakraProvider } from '@chakra-ui/react'
import Loading from '../comp/loading'
import { Suspense } from 'react'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import rtl from 'stylis-plugin-rtl'

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
    return (
        <Suspense fallback=".">
            <ChakraProvider>
                <CacheProvider
                    value={createCache({ key: 'css-ar', stylisPlugins: [rtl] })}
                >
                    <Loading />
                    <Component {...pageProps} />
                </CacheProvider>
            </ChakraProvider>
        </Suspense>
    )
}

export default appWithTranslation(MyApp)
