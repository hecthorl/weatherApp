import Head from 'next/head'
import { Box } from '@mantine/core'
import getForecast from 'services/getForecast'
import getIpClient from 'services/getIpClient'
import HeroComponent from 'components/HeroComponent'
import { AnimatePresence } from 'framer-motion'
import SearchView from 'components/SearchView'
import useBoolean from 'hooks/useBoolean'

export default function Home({ data = {} }) {
   const background = data.isDay
      ? 'linear-gradient(226deg, #5181ff, #c159ec)'
      : 'url(/sky_noc.png)'
   const [isThere, upDateState] = useBoolean(true)
   return (
      <>
         <Head>
            <title>Weather App</title>
         </Head>
         <Box
            sx={{
               height: '100vh',
               background: 'radial-gradient(circle, #fff08b 0%, #432b07 100%)',
               display: 'grid',
               placeContent: 'center'
            }}
         >
            <Box
               sx={{
                  width: 390,
                  height: 750,
                  background,
                  backgroundPosition: '32% 25%',
                  borderRadius: 44,
                  overflow: 'hidden',
                  position: 'relative'
               }}
            >
               <AnimatePresence initial={false}>
                  {isThere ? (
                     <HeroComponent data={data} searchCb={upDateState.toggle} />
                  ) : (
                     <SearchView onClick={upDateState.toggle} />
                  )}
               </AnimatePresence>
            </Box>
         </Box>
      </>
   )
}

/**
 *
 * @param {import('next').GetServerSidePropsContext} ctx
 */
export async function getServerSideProps(ctx) {
   const publicIp = getIpClient(ctx.req)
   const data = await getForecast().realTime(publicIp)

   return { props: { data } }
}
