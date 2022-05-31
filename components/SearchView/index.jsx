import { useEffect, useState } from 'react'
import { Box, Button } from '@mantine/core'
import { motion } from 'framer-motion'
import useBoolean from 'hooks/useBoolean'
import Input from 'components/Input'
import LeftChevron from 'components/LeftChevron'
import WeatherCard from 'components/WeatherCard'
import getForecast from 'services/getForecast'
import YTSpinner from 'components/YTSpinner'
import { CITIES } from 'utils/constants'

export default function SearchView({ onClick, setCurrentData }) {
   const [data, setData] = useState([])
   const [text, setText] = useState('')
   const [isLoading, setIsloading] = useBoolean(true)
   const [isError, setIsError] = useBoolean(false)

   const handleSubmit = e => {
      const val = text.trim()
      if (e.charCode === 13 && val !== '') {
         setIsloading.on()
         getForecast()
            .forecast(val)
            .then(data => {
               setData([data])
               setIsloading.off()
               isError && setIsError.off()
            })
            .catch(setIsError.on)
      }
   }

   useEffect(() => {
      Promise.all(
         CITIES.map(async country => await getForecast().forecast(country))
      ).then(data => {
         setIsloading.off()
         setData(data)
      })
   }, [])

   return (
      <Box
         onKeyPress={handleSubmit}
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
            <Input onChange={e => setText(e.target.value)} value={text} />
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
               {isError && 'Error Location'}
               {isLoading ? (
                  <YTSpinner />
               ) : (
                  data.map((item, i) => {
                     const { temp, shortDesc, location, isDay, iconNumber } =
                        item
                     return (
                        <WeatherCard
                           key={i}
                           isDay={isDay}
                           temp={temp}
                           location={location}
                           shortDesc={shortDesc}
                           icon={iconNumber}
                           onClick={() => {
                              setCurrentData(item)
                              onClick()
                           }}
                        />
                     )
                  })
               )}
            </Box>
         </Box>
      </Box>
   )
}
