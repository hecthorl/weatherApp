import { MantineProvider } from '@mantine/core'

export default function WeatherApp({ Component, pageProps }) {
   return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
         <Component {...pageProps} />
      </MantineProvider>
   )
}
