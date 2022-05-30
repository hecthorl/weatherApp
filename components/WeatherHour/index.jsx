import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Box } from '@mantine/core'

export default function WeatherHour({ children }) {
   const constraintsRef = useRef(null)
   return (
      <Box
         pb={10}
         ref={constraintsRef}
         sx={{
            maxWidth: '100%',
            position: 'relative',
            overflowX: 'scroll',
            '&::-webkit-scrollbar': {
               display: 'none'
            }
         }}
      >
         <Box
            dragConstraints={constraintsRef}
            component={motion.div}
            drag="x"
            sx={{
               padding: '0 13px',
               width: 'max-content',
               display: 'flex',
               gap: '1rem'
            }}
         >
            {children}
         </Box>
      </Box>
   )
}
