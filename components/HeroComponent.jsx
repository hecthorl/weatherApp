// import { useRef } from 'react'
import { Box } from '@mantine/core'
import { motion } from 'framer-motion'
import { BsFillSunFill } from 'react-icons/bs'
import WeatherDetails from './WeatherDetails'
import TabBar from './TabBar'
import Weather from './Weather'
import WeatherHour from './WeatherHour'
import PlusBtn from './PlusBtn'
import ListBtn from './ListBtn'
import WeatherDetail from './WeatherDetail'
import { useRouter } from 'next/router'
import LocalTime from './Localtime'

export default function HeroComponent({ data, searchCb }) {
   const { query } = useRouter()
   return (
      <Box
         sx={{ height: 'inherit' }}
         component={motion.div}
         initial={{ x: 390 }}
         animate={{ x: 0, transition: { type: 'just' } }}
         exit={{ x: 390 }}
      >
         <WeatherDetails>
            <WeatherHour />
            <Box
               mx={10}
               sx={{
                  opacity: query?.isTab ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  height: '100%'
               }}
            >
               <WeatherDetail>
                  <LocalTime />
               </WeatherDetail>
               <Box
                  sx={{
                     display: 'grid',
                     gridTemplate: 'repeat(4, 1fr) / 1fr 1fr',
                     height: '100%',
                     gap: 10,
                     marginTop: 10
                  }}
               >
                  <WeatherDetail>
                     <Box
                        sx={{
                           color: 'rgb(255 255 255 / 70%)',
                           display: 'flex',
                           alignItems: 'center',
                           gap: 5
                        }}
                     >
                        <BsFillSunFill fontSize="1.5rem" />
                        <Box>UV INDEX</Box>
                     </Box>
                     <Box
                        my={15}
                        sx={{ fontSize: '3rem', lineHeight: 1, color: 'white' }}
                     >
                        4
                     </Box>
                     <Box
                        sx={{ color: 'white', fontSize: '2rem', lineHeight: 1 }}
                     >
                        Moderate
                     </Box>
                  </WeatherDetail>
                  <WeatherDetail>xd</WeatherDetail>
               </Box>
            </Box>
         </WeatherDetails>
         <TabBar>
            <PlusBtn />
            <ListBtn onClick={searchCb} />
         </TabBar>
         <Box
            sx={{
               userSelect: 'none',
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
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
               <Box
                  sx={{
                     width: 200,
                     height: 200,
                     background: 'linear-gradient(270deg, #c159ec, #5181ff)',
                     borderRadius: 44,
                     boxShadow: 'inset 0 0 9px #ffffff3b'
                  }}
                  component="img"
                  src={`/wi/${data.iconNumber}.svg`}
               />
            </Box>
         </Box>
      </Box>
   )
}
