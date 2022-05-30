import { useEffect, useState } from 'react'
import { Box, Button } from '@mantine/core'
import { motion } from 'framer-motion'
import Input from 'components/Input'
import LeftChevron from 'components/LeftChevron'
import WeatherCard from 'components/WeatherCard'
import { CITIES } from 'utils/constants'
import getForecast from 'services/getForecast'

export default function SearchView({ onClick }) {
   const [data, setData] = useState([])
   useEffect(() => {
      Promise.all(
         CITIES.map(async country => await getForecast().forecast(country))
      ).then(data => {
         setData(data)
         console.log(data)
      })
   }, [])
   return (
      <Box
         component={motion.div}
         initial={{ x: 390 }}
         animate={{ x: 0, transition: { type: 'just' } }}
         exit={{ x: 390 }}
         sx={{ height: '100%', width: '100%' }}
      >
         <Box px={20} py={30} sx={{ borderBottom: '1px solid #ffffff2e' }}>
            <Box
               sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
               }}
            >
               <Button
                  sx={{
                     padding: 0,
                     fontSize: '1.5rem',
                     backgroundColor: 'transparent',
                     ':hover': {
                        backgroundColor: 'transparent'
                     }
                  }}
                  leftIcon={<LeftChevron />}
                  onClick={onClick}
                  children="Weather"
               />
               <Button sx={{ visibility: 'hidden' }} />
            </Box>
            <Input />
         </Box>
         <Box
            sx={{
               height: 601,
               overflowY: 'auto',
               '&::-webkit-scrollbar': {
                  width: 1
               }
            }}
         >
            <Box
               sx={{
                  minHeight: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  gap: '1.5rem'
               }}
            >
               {!data.length
                  ? 'Cargando...'
                  : data.map((item, i) => {
                       const { temp, shortDesc, location, isDay, iconNumber } =
                          item
                       return (
                          <WeatherCard
                             isDay={isDay}
                             temp={temp}
                             location={location}
                             shortDesc={shortDesc}
                             key={i}
                             icon={iconNumber}
                          />
                       )
                    })}
            </Box>
         </Box>
      </Box>
   )
}
