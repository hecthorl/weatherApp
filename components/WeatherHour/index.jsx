import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Box } from '@mantine/core'
import HourCondition from 'components/HourCondition'

export default function WeatherHour() {
   const constraintsRef = useRef(null)
   return (
      <Box
         ref={constraintsRef}
         sx={{
            maxWidth: '100%',
            position: 'relative',
            overflowX: 'scroll',
            zIndex: 6666,
            '&::-webkit-scrollbar': {
               width: 1
            }
         }}
      >
         <Box
            dragConstraints={constraintsRef}
            component={motion.div}
            drag="x"
            sx={{
               padding: '33px 13px 0',
               width: 'max-content',
               display: 'flex',
               gap: '1rem'
            }}
         >
            {[...Array(15)].map((_, i) => (
               <HourCondition key={i} />
            ))}
         </Box>
      </Box>
   )
}
