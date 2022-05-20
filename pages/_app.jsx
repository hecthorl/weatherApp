import { MantineProvider } from '@mantine/core'

export default function WeatherApp({
   Component,
   pageProps: { session, ...pageProps }
}) {
   return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
         <Component {...pageProps} />
      </MantineProvider>
   )
}
