import { type AppType } from "next/app";
import { type Session } from "next-auth";
import "../styles/globals.css";
import { appWithTranslation } from 'next-i18next';
import { ChakraProvider } from '@chakra-ui/react'


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      
    
  );
};

export default appWithTranslation(MyApp);
