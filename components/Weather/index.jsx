import { Box, Text } from '@mantine/core'
import useBoolean from 'hooks/useBoolean'

export default function Weather({
   location = 'x',
   temperature = [],
   weatherDesc = 'x'
}) {
   const [state, updateState] = useBoolean()

   return (
      <Box
         my="2rem"
         onClick={updateState.toggle}
         sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
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
               overflow: 'hidden'
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
               <Temperature children={`${temperature[0]}°C`} />
               <Temperature children={`${temperature[1]}°F`} />
            </Box>
         </Box>
         <Text
            title={weatherDesc}
            m={0}
            component="p"
            sx={{
               fontSize: '25px',
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
               fontSize: '20px',
               color: 'white',
               lineHeight: 1,
               display: 'inline-flex',
               justifyContent: 'space-between',
               width: '100%',
               maxWidth: 160
            }}
         >
            <Text component="span">H:24°</Text>
            <Text component="span">L:18°</Text>
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
