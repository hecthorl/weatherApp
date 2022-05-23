import { Box } from '@mantine/core'
import ListIcon from './ListIcon'
import MapIcon from './MapIcon'
import PlusIcon from './PlusIcon'
import Shape from './Shape'

export default function TabBar({ onClick }) {
   return (
      <Box
         sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 100
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
               <Box
                  children={<PlusIcon />}
                  sx={{
                     width: 64,
                     height: 64,
                     background:
                        'linear-gradient(156deg, rgba(245,245,249,1) 0%, rgba(218,223,231,1) 100%)',
                     borderRadius: 9999999,
                     boxShadow:
                        '6.01px 6.01px 26px #15182c, -6.01px -6.01px 26px #747db9',
                     display: 'grid',
                     placeContent: 'center'
                  }}
               />
               <Box onClick={onClick} children={<ListIcon />} />
            </Box>
         </Box>
      </Box>
   )
}
