import { useState, useRef } from 'react'
import { Box } from '@mantine/core'
import { motion, useDragControls } from 'framer-motion'
import DragArea from './DragArea'
import { useRouter } from 'next/router'

export default function WeatherDetails({ children }) {
   const boxRef = useRef(null)
   const dragControls = useDragControls()
   const { push, query } = useRouter()
   const [isUp, setIsUp] = useState(true)

   const handleDrag = (_, info) => {
      const valY = info.point.y < 250
      setIsUp(valY)
      const toStr = valY ? '/' : '/?isTab=true'
      push(toStr, '/', { shallow: true })

      if (boxRef.current) {
         boxRef.current.scrollTop = 0
      }
   }

   return (
      <Box
         component={motion.div}
         drag="y"
         dragListener={false}
         dragConstraints={{ bottom: 0, top: 0 }}
         dragControls={dragControls}
         onDrag={handleDrag}
         sx={{
            position: 'absolute',
            backdropFilter: 'blur(10px)',
            width: '100%',
            height: '100vh',
            borderRadius: 44,
            background:
               'linear-gradient(132deg, rgb(46 51 90 / 42%) 0%, rgba(28 27 51 / 42%) 61%)',
            bottom: isUp && !query?.isTab ? '-64vh' : '-14vh',
            overflow: 'hidden',
            transition: 'bottom 0.2s ease',
            zIndex: 20
         }}
      >
         <Box
            ref={boxRef}
            sx={{
               width: '100%',
               height: '100%',
               overflowY: 'scroll',
               '::-webkit-scrollbar': {
                  display: 'none'
               }
            }}
         >
            <DragArea dragControls={dragControls} />
            {children}
         </Box>
      </Box>
   )
}
