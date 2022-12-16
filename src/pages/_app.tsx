import { AppProps, type AppType } from 'next/app'
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { ChakraProvider } from '@chakra-ui/react'
import Loading from '../comp/loading'
import React, { Suspense } from 'react'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import rtl from 'stylis-plugin-rtl'
// import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
// import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'

const MyApp = ({
    Component,
    pageProps: { ...pageProps },
}: AppProps<{
    // initialSession: Session
}>) => {
    // const [supabaseClient] = React.useState(() => createBrowserSupabaseClient())
    //     <SessionContextProvider
    //          supabaseClient={supabaseClient}
    //          initialSession={pageProps.initialSession}>
    //      </SessionContextProvider>

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

export default MyApp
