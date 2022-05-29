import { Box } from '@mantine/core'
import { AiOutlineFieldTime } from 'react-icons/ai'

export default function LocalTime({ time }) {
   const hourNminute = new Intl.DateTimeFormat('en', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
   }).format(time * 1000)
   const completeDate = new Intl.DateTimeFormat('en', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
   }).format(time * 1000)

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
               {completeDate}
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
            <Box sx={{ color: 'white' }} children={hourNminute} />
         </Box>
      </Box>
   )
}
