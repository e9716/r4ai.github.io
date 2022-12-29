import { Link, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FC } from 'react'

export const HeaderLink: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link as={NextLink} {...(props as any)}>
      {children}
    </Link>
  )
}
