import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ChakraProvider, PortalManager } from '@chakra-ui/react'
import Loading from '../comp/loading'
import React, { Suspense } from 'react'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import rtl from 'stylis-plugin-rtl'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Session } from '@supabase/auth-helpers-react';
import { SessionContextProvider } from '@supabase/auth-helpers-react'

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppProps<{ initialSession: Session }>) => {
    const [supabaseClient] = React.useState(() => createBrowserSupabaseClient())

    return <Suspense fallback=".">
        <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}
        >
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
        </SessionContextProvider>
    </Suspense>
}

export default MyApp
