import { Box } from '@mantine/core'

export default function HourCondition({ imgCode, time, temp, isDay }) {
   const hour = new Intl.DateTimeFormat('en', {
      hour12: true,
      hour: '2-digit'
   }).format(time)

   return (
      <Box
         sx={{
            borderRadius: 999999,
            width: 60,
            height: 146,
            background: '#48319D',
            border: '1px solid #ffffff4f',
            boxShadow: '5px 4px 10px rgb(0 0 0 / 25%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            userSelect: 'none'
         }}
      >
         <Box component="time" children={hour} />
         <Box
            sx={{
               background: `url(/wi/${isDay ? 'day' : 'night'}/${imgCode}.svg)`,
               width: '100%',
               height: 64,
               backgroundRepeat: 'no-repeat'
            }}
         />
         <Box
            sx={{ lineHeight: 1, fontSize: '1.2rem' }}
            component="time"
            children={`${temp}°`}
         />
      </Box>
   )
}
