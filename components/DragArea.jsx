import { Box } from '@mantine/core'

export default function DragArea({ dragControls }) {
   return (
      <Box
         onPointerDown={e => dragControls.start(e)}
         sx={{
            width: '100%',
            height: 20,
            display: 'flex',
            placeContent: 'center',
            position: 'relative',
            borderBottom: '1px solid rgb(255 255 255 / 10%)',
            margin: '0 0 10px  0',
            ':after': {
               content: '""',
               position: 'absolute',
               width: '100%',
               height: 84,
               backgroundColor: '#E0D9FF',
               filter: 'blur(10px)',
               top: -86,
               borderRadius: '50%'
            },
            ':before': {
               content: '""',
               position: 'absolute',
               width: '100%',
               height: 84,
               backgroundColor: '#C427FB',
               filter: 'blur(60px)',
               top: -74,
               borderRadius: '50%'
            }
         }}
      >
         <Box
            id="xd"
            sx={{
               height: 5,
               marginTop: 5,
               width: 48,
               background: '#000',
               borderRadius: 999999
            }}
         />
      </Box>
   )
}
