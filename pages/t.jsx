import { Box } from '@mantine/core'
import { si } from 'utils/constants'

export default function T() {
   return (
      <Box
         sx={{
            backgroundColor: '#35366e',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 100px)',
            gap: 10
         }}
      >
         {si.map(item => {
            return (
               <Box sx={{ textAlign: 'center' }} key={item}>
                  <Box component="img" src={`/transpilar/night/${item}`} />
                  {item.replace('.png', '')}
               </Box>
            )
         })}
      </Box>
   )
}
