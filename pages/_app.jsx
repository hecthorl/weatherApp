import { Global, MantineProvider } from '@mantine/core'

export default function WeatherApp({ Component, pageProps }) {
   return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
         <>
            <Global
               styles={{
                  '*, *::before, *::after': {
                     userSelect: 'none'
                  }
               }}
            />
            <Component {...pageProps} />
         </>
      </MantineProvider>
   )
}
