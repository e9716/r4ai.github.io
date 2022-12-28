import { Flex, HStack, IconButton, Spacer, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

import { HeaderLink } from './HeaderLink'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Flex bgColor='blackAlpha.100'>
        <Spacer />
        <Flex w='600px'>
          <HStack spacing={5}>
            <HeaderLink href='/'>Home</HeaderLink>
            <HeaderLink href='/blog'>Blog</HeaderLink>
          </HStack>
          <Spacer />
          <IconButton
            aria-label='Toggle color mode'
            variant='ghost'
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
          >
            Mode
          </IconButton>
        </Flex>
        <Spacer />
      </Flex>
    </>
  )
}
