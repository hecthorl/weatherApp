import { Box } from '@mantine/core'
import { useRouter } from 'next/router'
import PlusIcon from './PlusIcon'

export default function PlusBtn() {
   const { push, query } = useRouter()
   // console.log(typeof query?.isTab)
   return (
      <Box
         onClick={() => {
            push('/?isTab=true', '/', { shallow: true })
         }}
         role="button"
         children={<PlusIcon />}
         sx={{
            width: 64,
            height: 64,
            background:
               'linear-gradient(156deg, rgba(245,245,249,1) 0%, rgba(218,223,231,1) 100%)',
            borderRadius: 9999999,
            boxShadow:
               '6.01px 6.01px 26px #15182c, -6.01px -6.01px 26px #747db9',
            display: 'grid',
            placeContent: 'center'
         }}
      />
   )
}
