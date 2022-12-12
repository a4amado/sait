import { type AppType } from 'next/app'
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { ChakraProvider } from '@chakra-ui/react'
import Loading from '../comp/loading'

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
    return (
        <ChakraProvider>
            <Loading />
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default appWithTranslation(MyApp)
