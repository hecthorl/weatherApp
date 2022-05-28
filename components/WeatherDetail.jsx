import { Box } from '@mantine/core'

export default function WeatherDetail({ children }) {
   return (
      <Box
         sx={{
            border: '1px solid rgb(176 162 226 / 37%)',
            minHeight: 100,
            maxWidth: '100%',
            borderRadius: 22,
            padding: '0.7rem 1rem',
            backgroundColor: 'rgb(72 49 157 / 53%)'
         }}
      >
         {children}
      </Box>
   )
}
