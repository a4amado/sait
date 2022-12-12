import { type AppType } from 'next/app'
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { ChakraProvider } from '@chakra-ui/react'
import Loading from '../comp/loading'
import { Suspense } from 'react'

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
    return (
        <Suspense fallback=".">
            <ChakraProvider>
                <Loading />
                <Component {...pageProps} />
            </ChakraProvider>
        </Suspense>
    )
}

export default appWithTranslation(MyApp)
