const { Box } = require('@mantine/core')

export default function YTSpinner({
   borderColor = 'white',
   size = 64,
   borderWidth = 6
}) {
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
