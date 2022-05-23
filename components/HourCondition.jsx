import { Box } from '@mantine/core'

export default function HourCondition() {
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
         <Box component="time" children="12 AM" />
         <Box
            sx={{
               background: 'url(/wi/179.svg)',
               width: '100%',
               height: 64,
               backgroundRepeat: 'no-repeat'
            }}
         />
         <Box
            sx={{ lineHeight: 1, fontSize: '1.2rem' }}
            component="time"
            children="19°"
         />
      </Box>
   )
}
