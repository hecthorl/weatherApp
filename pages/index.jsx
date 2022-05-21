import Head from 'next/head'
import { Box } from '@mantine/core'
import getForecast from 'services/getForecast'
import Weather from 'components/Weather'
import getIpClient from 'services/getIpClient'

export default function Home({ data = '', ip }) {
   console.log(ip)
   return (
      <>
         <Head>
            <title>Weather App</title>
         </Head>
         <Box
            sx={{
               height: '100vh',
               backgroundColor: '#2b4646',
               display: 'grid',
               placeContent: 'center'
            }}
         >
            <Box
               sx={{
                  width: 390,
                  height: 700,
                  backgroundImage: 'url(/sky_noc.png)',
                  backgroundPosition: '32% 25%',
                  borderRadius: 44,
                  overflow: 'hidden'
               }}
            >
               <Box
                  sx={{
                     height: '90%',
                     display: 'flex',
                     flexDirection: 'column',
                     width: '100%'
                  }}
               >
                  <Weather
                     location={data.location.name}
                     weatherDesc={data.shortDesc}
                     temperature={data.temp}
                  />
                  <Box sx={{ flex: 1 }}></Box>
               </Box>
            </Box>
         </Box>
      </>
   )
}

/**
<Box
                  sx={{
                     width: '100%',
                     height: '100%',
                     background:
                        'linear-gradient(132deg, rgba(46,51,90,1) 0%, rgba(28,27,51,1) 61%)'
                  }}
               ></Box>
 */
/**
 *
 * @param {import('next').GetServerSidePropsContext} ctx
 */
export async function getServerSideProps({ req }) {
   const publicIp = getIpClient(req)
   const gelocation = await getForecast().getGeolocation(publicIp)
   const data = await getForecast().realTime(gelocation)

   return { props: { data, ip: publicIp ?? 'nada' } }
}
