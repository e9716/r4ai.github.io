import { chakra } from '@chakra-ui/react'
import NextImage from 'next/image'

export const Image = chakra(NextImage, {
  shouldForwardProp: (props) => ['width', 'height', 'src', 'alt'].includes(props),
})
