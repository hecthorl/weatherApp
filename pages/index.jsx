import Head from 'next/head'
import { Box } from '@mantine/core'
import getForecast from 'services/getForecast'
import getIpClient from 'services/getIpClient'
import Weather from 'components/Weather'
import TabBar from 'components/TabBar'
import HourCondition from 'components/HourCondition'

export default function Home({ data = {} }) {
   const background = data.isDay
      ? 'linear-gradient(226deg, #5181ff, #c159ec)'
      : 'url(/sky_noc.png)'
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
               <Box
                  sx={{
                     position: 'absolute',
                     width: '100%',
                     height: 325,
                     borderRadius: 44,
                     background:
                        'linear-gradient(132deg, rgba(46,51,90,1) 0%, rgba(28,27,51,1) 61%)',
                     bottom: -40,
                     overflow: 'hidden',
                     borderTop: '1px solid #956bb7'
                  }}
               >
                  <Box
                     sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        ':after': {
                           content: '""',
                           position: 'absolute',
                           width: '100%',
                           height: 84,
                           backgroundColor: '#E0D9FF',
                           filter: 'blur(10px)',
                           top: -86,
                           borderRadius: '50%'
                        },
                        ':before': {
                           content: '""',
                           position: 'absolute',
                           width: '100%',
                           height: 84,
                           backgroundColor: '#C427FB',
                           filter: 'blur(60px)',
                           top: -74,
                           borderRadius: '50%'
                        }
                     }}
                  >
                     <Box
                        sx={{
                           padding: '33px 13px',
                           width: 'max-content',
                           display: 'flex',
                           gap: '1rem'
                        }}
                     >
                        {[...Array(5)].map((_, i) => (
                           <HourCondition key={i} />
                        ))}
                     </Box>
                     <Box
                        sx={{
                           position: 'absolute',
                           height: 5,
                           width: 48,
                           background: '#1f1d47ad',
                           borderRadius: 999999,
                           top: 8,
                           left: 'calc(50% - 24px)',
                           zIndex: 55555
                        }}
                     />
                  </Box>
               </Box>
               <TabBar />
               <Box
                  sx={{
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
                  <Box
                     sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                  >
                     <Box
                        sx={{
                           width: 200,
                           height: 200,
                           background:
                              'linear-gradient(270deg, #c159ec, #5181ff)',
                           borderRadius: 44
                        }}
                        component="img"
                        src={`/wi/${data.iconNumber}.svg`}
                     />
                  </Box>
               </Box>
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
