import { Box } from '@mantine/core'
import { useRouter } from 'next/router'
import MapIcon from './MapIcon'
import Shape from './Shape'

export default function TabBar({ children }) {
   const { query } = useRouter()

   return (
      <Box
         sx={{
            transition: 'bottom 0.2s ease',
            position: 'absolute',
            bottom: query?.isTab ? -110 : 0,
            width: '100%',
            height: 100,
            zIndex: 30
         }}
      >
         <Box
            sx={{
               width: '100%',
               height: '100%',
               position: 'relative'
            }}
         >
            <Shape />
            <Box
               sx={{
                  top: 0,
                  width: '100%',
                  position: 'absolute',
                  display: 'flex',
                  justifyContent: 'space-between',
                  height: '100%',
                  alignItems: 'center',
                  padding: '0 2rem'
               }}
            >
               <Box
                  sx={{ opacity: 0, userSelect: 'none' }}
                  children={<MapIcon />}
               />
               {children}
            </Box>
         </Box>
      </Box>
   )
}
