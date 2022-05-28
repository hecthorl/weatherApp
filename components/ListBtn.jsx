import { Box } from '@mantine/core'
import ListIcon from './ListIcon'

export default function ListBtn({ onClick }) {
   return <Box role="button" onClick={onClick} children={<ListIcon />} />
}
