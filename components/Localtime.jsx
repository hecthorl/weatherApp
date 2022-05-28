import { Box } from '@mantine/core'
import { AiOutlineFieldTime } from 'react-icons/ai'

export default function LocalTime() {
   return (
      <Box sx={{ display: 'flex', height: '100%' }}>
         <Box sx={{ flex: 0.5 }}>
            <Box
               sx={{
                  color: 'rgb(255 255 255 / 70%)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5
               }}
            >
               <AiOutlineFieldTime fontSize="1.5rem" />
               <Box sx={{ whiteSpace: 'nowrap' }}>Local Time</Box>
            </Box>
            <Box sx={{ color: 'white', fontSize: '1.2rem', marginTop: 13 }}>
               27/08/2022
            </Box>
         </Box>
         <Box
            sx={{
               flex: 1,
               display: 'grid',
               placeContent: 'center',
               fontSize: '3rem'
            }}
         >
            <Box
               sx={{
                  color: 'white'
               }}
            >
               10:00 AM
            </Box>
         </Box>
      </Box>
   )
}
