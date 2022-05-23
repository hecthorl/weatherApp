import { Box } from '@mantine/core'
import Lupa from 'components/Lupa'

export default function Input({ value, onChange }) {
   return (
      <Box sx={{ position: 'relative' }}>
         <Box
            sx={{
               position: 'absolute',
               height: '100%',
               left: 15,
               top: 8
            }}
            children={<Lupa />}
         />
         <Box
            value={value}
            onChange={onChange}
            component="input"
            variant="unstyled"
            placeholder="Search for a city or country"
            sx={{
               width: '100%',
               boxShadow:
                  'inset 6px 5px 4px #5369d6, inset -5px -5px 8px #90a3f0',
               backgroundColor: 'transparent',
               border: 'none',
               borderRadius: 10,
               height: 36,
               color: 'white',
               outline: 'none',
               paddingLeft: '2.2rem',
               '::placeholder': {
                  color: '#ffffffcc'
               }
            }}
         />
      </Box>
   )
}
