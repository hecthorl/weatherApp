import { useState } from 'react'
import { Box } from '@mantine/core'
import { motion, useDragControls } from 'framer-motion'
import DragArea from './DragArea'

export default function WeatherDetails({ children }) {
   const dragControls = useDragControls()
   const [isUp, setIsUp] = useState(true)
   return (
      <Box
         component={motion.div}
         drag="y"
         dragListener={false}
         dragConstraints={{ bottom: 0, top: 0 }}
         dragControls={dragControls}
         onDrag={(_, info) => {
            console.log(info.point.y)
            setIsUp(info.point.y <= 250)
         }}
         sx={{
            position: 'absolute',
            width: '100%',
            height: '100vh',
            borderRadius: 44,
            background:
               'linear-gradient(132deg, rgba(46,51,90,1) 0%, rgba(28,27,51,1) 61%)',
            bottom: isUp ? '-64vh' : '-14vh',
            overflow: 'hidden',
            transition: 'bottom 0.2s ease',
            zIndex: 20
         }}
      >
         <Box
            sx={{
               width: '100%',
               height: '100%'
            }}
         >
            <DragArea dragControls={dragControls} />
            {children}
         </Box>
      </Box>
   )
}
