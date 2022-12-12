import { type AppType } from 'next/app'
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default appWithTranslation(MyApp)
