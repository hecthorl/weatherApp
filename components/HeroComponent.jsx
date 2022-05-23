import { Box } from '@mantine/core'
import { motion } from 'framer-motion'
import TabBar from './TabBar'
import Weather from './Weather'
import WeatherHour from './WeatherHour'

export default function HeroComponent({ data, onClick }) {
   return (
      <Box
         sx={{ height: 750 }}
         component={motion.div}
         initial={{ x: 390 }}
         animate={{ x: 0, transition: { type: 'just' } }}
         exit={{ x: 390 }}
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
               <WeatherHour />
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
         <TabBar onClick={onClick} />
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
