import { Link, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FC } from 'react'

export const HeaderLink: FC<LinkProps> = ({ children, ...props }) => {
  const propsAny = props as any
  return (
    <Link as={NextLink} {...propsAny}>
      {children}
    </Link>
  )
}
