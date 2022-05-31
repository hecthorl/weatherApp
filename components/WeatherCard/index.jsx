import { Box, Text } from '@mantine/core'

export default function WeatherCard({
   isDay,
   temp,
   location,
   shortDesc,
   icon,
   onClick
}) {
   const locationName = `${location.country}, ${location.name || location.city}`
   return (
      <Box
         onClick={onClick}
         sx={{
            width: 342,
            height: 175,
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)'
         }}
      >
         <Box
            sx={{
               position: 'absolute',
               top: 0,
               left: 0,
               height: 'inherit',
               width: 'inherit'
            }}
            children={<BB />}
         />
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'column',
               position: 'relative',
               justifyContent: 'center',
               alignItems: 'center',
               color: 'white'
            }}
         >
            <Text
               children={temp.average[0] + '°'}
               sx={{ fontSize: '5rem', lineHeight: 1, marginBottom: '1rem' }}
            />
            <Text
               children={`H:${temp.max[0]}° L:${temp.min[0]}°`}
               sx={{
                  alignSelf: 'flex-start',
                  paddingLeft: '1.46rem',
                  lineHeight: 1,
                  color: '#ffffff78'
               }}
            />
            <Text children={locationName} sx={{ lineHeight: 1 }} />
         </Box>
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'column',
               position: 'relative',
               justifyContent: 'center',
               alignItems: 'center',
               color: 'white',
               width: '100%'
            }}
         >
            <Box
               sx={{
                  flex: 'calc(0.001 * 745)',
                  width: '100%',
                  position: 'relative'
               }}
            >
               <Box
                  sx={{ position: 'absolute', top: -42, left: 0 }}
                  component="img"
                  src={`/wi/${isDay ? 'day' : 'night'}/${icon}.svg`}
               />
            </Box>
            <Box
               sx={{ textAlign: 'end', width: '70%', whiteSpace: 'nowrap' }}
               children={shortDesc}
            />
         </Box>
      </Box>
   )
}

function BB() {
   return (
      <svg
         width={342}
         height={175}
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M0 66.44c0-34.794 0-52.192 11.326-61.2C22.652-3.768 39.603.148 73.504 7.98l234.399 54.145c16.356 3.778 24.533 5.667 29.315 11.68C342 79.814 342 88.208 342 104.994V131c0 20.742 0 31.113-6.444 37.556C329.113 175 318.742 175 298 175H44c-20.742 0-31.113 0-37.556-6.444C0 162.113 0 151.742 0 131V66.44Z"
            fill="url(#a)"
         />
         <defs>
            <linearGradient
               id="a"
               x1={0}
               y1={128}
               x2={354.142}
               y2={128}
               gradientUnits="userSpaceOnUse"
            >
               <stop stopColor="#6e45da" />
               <stop offset={1} stopColor="#362A84" />
            </linearGradient>
         </defs>
      </svg>
   )
}
