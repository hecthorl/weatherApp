import { Box, Text } from '@mantine/core'
import useBoolean from 'hooks/useBoolean'

export default function Weather({
   location = '',
   temperature = {},
   weatherDesc = ''
}) {
   const [state, updateState] = useBoolean()
   const hi = temperature.max[state ? 1 : 0]
   const low = temperature.min[state ? 1 : 0]
   return (
      <Box
         my="2rem"
         onClick={updateState.toggle}
         sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            cursor: 'default',
            userSelect: 'none'
         }}
      >
         <Text
            m={0}
            component="p"
            sx={{
               fontSize: 35,
               color: 'white',
               lineHeight: 1,
               fontWeight: 500
            }}
            children={location}
         />
         <Box
            sx={{
               height: 96,
               width: 248,
               position: 'relative',
               overflow: 'hidden',
               zIndex: 10
            }}
         >
            <Box
               style={{
                  bottom: state ? 0 : '-100%'
               }}
               sx={{
                  width: 'inherit',
                  position: 'absolute',
                  transition: 'bottom .2s ease'
               }}
            >
               <Temperature children={`${temperature.average[0]}°C`} />
               <Temperature children={`${temperature.average[1]}°F`} />
            </Box>
         </Box>
         <Text
            title={weatherDesc}
            m={0}
            component="p"
            sx={{
               fontSize: 25,
               color: 'silver',
               lineHeight: 1.3,
               fontWeight: 500,
               maxWidth: 160,
               whiteSpace: 'nowrap',
               overflow: 'hidden',
               textOverflow: 'ellipsis'
            }}
            children={weatherDesc}
         />
         <Box
            m={0}
            component="p"
            sx={{
               fontSize: 25,
               color: 'white',
               lineHeight: 1,
               display: 'inline-flex',
               justifyContent: 'space-between',
               width: '100%',
               maxWidth: 160
            }}
         >
            <Text component="span">H:{hi}°</Text>
            <Text component="span">L:{low}°</Text>
         </Box>
      </Box>
   )
}

function Temperature({ children }) {
   return (
      <Text
         m={0}
         component="p"
         sx={{
            textAlign: 'center',
            fontSize: 96,
            color: 'white',
            lineHeight: 1,
            width: '100%',
            fontWeight: 100
         }}
         children={children}
      />
   )
}
