import { Button, ButtonProps } from '@chakra-ui/react'
import { FC } from 'react'

export const HeaderButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button color='blackAlpha.900' variant='link' fontWeight='bold' size='lg' {...props}>
      {children}
    </Button>
  )
}
