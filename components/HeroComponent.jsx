import { useRouter } from 'next/router'
import { Box } from '@mantine/core'
import { motion } from 'framer-motion'
import {
   BsFillSunFill,
   BsThermometerHigh,
   BsWind,
   BsFillEyeFill
} from 'react-icons/bs'
import { GiDirectionSign } from 'react-icons/gi'
import { WiHumidity } from 'react-icons/wi'
import WeatherDetails from './WeatherDetails'
import TabBar from './TabBar'
import Weather from './Weather'
import WeatherHour from './WeatherHour'
import PlusBtn from './PlusBtn'
import ListBtn from './ListBtn'
import WeatherDetail from './WeatherDetail'
import LocalTime from './Localtime'
import BoxCondition from './BoxCondition'

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
                  <LocalTime time={data.currentDate} />
               </WeatherDetail>
               <Box
                  sx={{
                     display: 'grid',
                     gridTemplate: 'repeat(3, 180px) / 1fr 1fr',
                     height: 'fit-content',
                     gap: 10,
                     marginTop: 10
                  }}
               >
                  <WeatherDetail>
                     <BoxCondition
                        Icon={BsFillSunFill}
                        name="UV INDEX"
                        imgSrc="uv-index"
                        data={data.uv}
                     />
                  </WeatherDetail>
                  <WeatherDetail>
                     <BoxCondition
                        Icon={WiHumidity}
                        name="HUMIDITY"
                        imgSrc="humidity"
                        data={data.humidity}
                     />
                  </WeatherDetail>
                  <WeatherDetail>
                     <BoxCondition
                        Icon={BsThermometerHigh}
                        name="FEELS LIKE"
                        imgSrc="thermometer"
                        data={`${data.feelsLikeC}°`}
                     />
                  </WeatherDetail>
                  <WeatherDetail>
                     <BoxCondition
                        Icon={BsWind}
                        name="WIND KM/H"
                        imgSrc="wind"
                        data={Math.floor(data.wind.velocity)}
                     />
                  </WeatherDetail>
                  <WeatherDetail>
                     <BoxCondition
                        Icon={BsFillEyeFill}
                        name="VISIVILITY"
                        data={data.visivility + 'km'}
                     />
                  </WeatherDetail>
                  <WeatherDetail>
                     <BoxCondition
                        Icon={GiDirectionSign}
                        name="WIND DIR"
                        imgSrc="windsock"
                        data={data.wind.direction}
                     />
                  </WeatherDetail>
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
