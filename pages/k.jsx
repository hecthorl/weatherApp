import { Box } from '@mantine/core'
import { currentIcons } from 'utils/constants'

export default function K() {
   return (
      <Box
         sx={{
            backgroundColor: '#35366e',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 100px)',
            gap: 10,
            color: 'white'
         }}
      >
         {currentIcons.map(item => {
            return (
               <Box sx={{ textAlign: 'center' }} key={item}>
                  <Box component="img" src={`/weather_icons/${item}`} />
                  {item.replace('.svg', '')}
               </Box>
            )
         })}
      </Box>
   )
}
