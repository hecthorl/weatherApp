import { Box } from '@mantine/core'
import { staticIcons } from 'utils/constants'

export default function G() {
   return (
      <Box
         sx={{
            backgroundColor: '#35366e',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 100px)',
            gap: 10
         }}
      >
         {staticIcons.map(item => {
            return (
               <Box
                  sx={{
                     color: 'white',
                     textAlign: 'center'
                  }}
                  key={item}
               >
                  <Box component="img" src={`/wi/${item}`} />
                  {item.replace('.svg', '')}
               </Box>
            )
         })}
      </Box>
   )
}
