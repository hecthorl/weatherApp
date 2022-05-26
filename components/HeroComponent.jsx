// import { useRef } from 'react'
import { Box } from '@mantine/core'
import { motion } from 'framer-motion'
import WeatherDetails from './WeatherDetails'
import TabBar from './TabBar'
import Weather from './Weather'
import WeatherHour from './WeatherHour'

export default function HeroComponent({ data, onClick }) {
   // const constrainsRef = useRef(null)
   return (
      <Box
         // ref={constrainsRef}
         sx={{ height: 'inherit' }}
         component={motion.div}
         initial={{ x: 390 }}
         animate={{ x: 0, transition: { type: 'just' } }}
         exit={{ x: 390 }}
      >
         <WeatherDetails>
            <WeatherHour />
         </WeatherDetails>
         <TabBar onClick={onClick} />
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
