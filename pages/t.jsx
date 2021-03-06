import { useState, useRef, useEffect } from 'react'
import { Box, ColorPicker, Slider, Text } from '@mantine/core'
import { motion } from 'framer-motion'
import { si } from 'utils/constants'

export default function T() {
   const ccRef = useRef(null)
   const [size, setSize] = useState(64)
   const [boo, setBoo] = useState(false)
   const [borderSize, setBorderSize] = useState(6)
   const [borderColor, setBorderColor] = useState('rgb(255 255 255 / 100%)')
   useEffect(() => {
      /**
       * @type {Element}
       */
      const el = ccRef.current
      if (el) {
         console.log((el.getBoundingClientRect().x = 50))
      }
      // const id = setInterval(() => {
      //    setBoo(prev => !prev)
      // }, 2000)
      // return () => clearInterval(id)
   }, [])

   return (
      <Box
         sx={{
            backgroundColor: '#35366e',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: '1fr',
            gap: 10,
            placeContent: 'center',
            height: '100vh'
         }}
      >
         <Box
            sx={{ maxWidth: 500, margin: '0 auto', width: '100%', padding: 20 }}
         >
            <Box>
               <Text color="teal">SIZE: {size}px</Text>
               <Slider
                  step={10}
                  min={1}
                  max={500}
                  value={size}
                  onChange={setSize}
                  type="range"
               />
            </Box>
            <Box>
               <Text color="teal">BorderSize: {borderSize}px</Text>
               <Slider
                  step={5}
                  min={1}
                  max={60}
                  value={borderSize}
                  onChange={setBorderSize}
                  type="range"
               />
            </Box>
            <Box>
               <Text color="teal">Hex: {borderColor}</Text>
               <ColorPicker
                  format="rgba"
                  value={borderColor}
                  onChange={setBorderColor}
               />
            </Box>
            <Box>
               <Box
                  sx={{
                     width: 500,
                     height: 400,
                     border: '5px solid red',
                     position: 'relative'
                  }}
               >
                  <Box
                     component={motion.div}
                     drag="y"
                     dragConstraints={{ top: 0, bottom: 0 }}
                     onDrag={(_, info) => {
                        console.log(info.point.y)
                        setBoo(info.point.y >= 450)
                     }}
                     sx={{
                        position: 'absolute',
                        width: 100,
                        height: 100,
                        background: 'blue',
                        top: boo ? 390 : 0,
                        transition: 'top 0.5s ease'
                     }}
                  />
               </Box>
            </Box>
         </Box>
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               overflow: 'hidden'
            }}
         >
            {/* <YoutubeSpinner
               borderColor={borderColor}
               size={size}
               borderWidth={borderSize}
            /> */}
            {si.map(item => {
               return (
                  <Box sx={{ textAlign: 'center' }} key={item}>
                     <Box component="img" src={`/transpilar/night/${item}`} />
                     {item.replace('.png', '')}
                  </Box>
               )
            })}
         </Box>
      </Box>
   )
}
/**
 *  {si.map(item => {
            return (
               <Box sx={{ textAlign: 'center' }} key={item}>
                  <Box component="img" src={`/transpilar/night/${item}`} />
                  {item.replace('.png', '')}
               </Box>
            )
         })}
 */
