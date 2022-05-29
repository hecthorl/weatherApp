import { Box, Button } from '@mantine/core'
import Input from 'components/Input'
import { motion } from 'framer-motion'
import LeftChevron from 'components/LeftChevron'
import WeatherCard from 'components/WeatherCard'

export default function SearchView({ onClick }) {
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
               <Button sx={{ visibility: 'hidden' }}></Button>
            </Box>
            <Box>
               <Input />
            </Box>
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
               {[...Array(15)].map((_, i) => (
                  <WeatherCard key={i} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}
