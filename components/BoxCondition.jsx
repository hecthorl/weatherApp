import { Box } from '@mantine/core'

export default function BoxCondition({ Icon, name, imgSrc, data }) {
   return (
      <Box
         sx={{
            width: '100%',
            height: '100%',
            display: 'grid',
            placeContent: 'center',
            gap: '1rem'
         }}
      >
         <Box
            sx={{
               color: 'rgb(255 255 255 / 70%)',
               display: 'flex',
               alignItems: 'center',
               gap: 5
            }}
         >
            <Icon fontSize="1.5rem" />
            <Box sx={{ lineHeight: 1, whiteSpace: 'nowrap' }}>{name}</Box>
         </Box>
         <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            <Box
               sx={{
                  flex: 1,
                  fontSize: '2.5rem',
                  color: 'white',
                  lineHeight: 1
               }}
               children={data}
            />
            {imgSrc && (
               <Box
                  component="img"
                  sx={{
                     width: 68,
                     height: 68
                  }}
                  src={`/weather_icons/${imgSrc}.svg`}
               />
            )}
         </Box>
      </Box>
   )
}
