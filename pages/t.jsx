import { useState, useRef, useEffect } from 'react'
import { Box, ColorPicker, Slider, Text } from '@mantine/core'
import { motion, useAnimation } from 'framer-motion'
// import { si } from 'utils/constants'

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
                  // component={motion.div}
               >
                  {/* <Box
                     component={motion.div}
                     sx={{
                        width: 100,
                        height: 100,
                        background: 'blue'
                        // transition: 'transform 0.2s ease'
                     }}
                     drag="x"
                     onDrag={onPan}
                     onDragEnd={onPanEnd}
                     dragConstraints={{ left: 0, right: 390 }}
                     animate={animationControl}
                  /> */}
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
            <YoutubeSpinner
               borderColor={borderColor}
               size={size}
               borderWidth={borderSize}
            />
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

function YoutubeSpinner({ borderColor = 'white', size = 64, borderWidth = 6 }) {
   const circle = {
      position: 'absolute',
      width: '200%',
      height: '100%',
      borderStyle: 'solid',
      borderColor: `${borderColor} ${borderColor} transparent`,
      borderRadius: '50%',
      borderWidth: borderWidth + 'px'
   }
   const circleContainer = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      overflow: 'hidden'
   }
   return (
      <Box
         sx={{
            width: 'fit-content',
            animation: 'aa  1568.2352941176ms linear infinite',
            '@keyframes aa': {
               '100%': { transform: 'rotate(360deg)' }
            },
            overflow: 'hidden',
            borderRadius: '999999px'
         }}
      >
         <Box
            sx={{
               width: size + 'px',
               height: size + 'px',
               position: 'relative',
               animation: 'xd 5332ms cubic-bezier(0.4,0,0.2,1) infinite both',
               '@keyframes xd': {
                  '12.5%': { transform: 'rotate(135deg)' },
                  '25%': { transform: 'rotate(270deg)' },
                  '37.5%': { transform: 'rotate(405deg)' },
                  '50%': { transform: 'rotate(540deg)' },
                  '62.5%': { transform: 'rotate(675deg)' },
                  '75%': { transform: 'rotate(810deg)' },
                  '87.5%': { transform: 'rotate(945deg)' },
                  '100%': { transform: 'rotate(1080deg)' }
               }
            }}
         >
            <Box sx={{ ...circleContainer, right: '49%', left: 0 }}>
               <Box
                  sx={{
                     ...circle,
                     borderRightColor: 'transparent',
                     left: 0,
                     right: '-100%',
                     animation:
                        'xd-left 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
                     '@keyframes xd-left': {
                        '0%': { transform: 'rotate(130deg)' },
                        '50%': { transform: 'rotate(-5deg)' },
                        '100%': { transform: 'rotate(130deg)' }
                     }
                  }}
               />
            </Box>
            <Box sx={{ ...circleContainer, left: '49%', right: 0 }}>
               <Box
                  sx={{
                     ...circle,
                     borderLeftColor: 'transparent',
                     left: '-100%',
                     right: 0,
                     animation:
                        'xd-right 1333ms cubic-bezier(0.4,0,0.2,1) infinite both',
                     '@keyframes xd-right': {
                        '0%': { transform: 'rotate(-130deg)' },
                        '50%': { transform: 'rotate(5deg)' },
                        '100%': { transform: 'rotate(-130deg)' }
                     }
                  }}
               />
            </Box>
         </Box>
      </Box>
   )
}
