import { Flex, FlexProps, HStack, IconButton, Spacer, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

import { HeaderLink } from './HeaderLink'

export const Header: FC<FlexProps> = ({ children, ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Flex
        bgColor={colorMode === 'light' ? 'blackAlpha.100' : 'blackAlpha.400'}
        {...(props as any)}
        top={0}
        zIndex='sticky'
        position='sticky'
        backdropFilter='auto'
        backdropBlur='6px'
      >
        <Spacer />
        <Flex w='600px'>
          <HStack as='nav' spacing={5}>
            <HeaderLink href='/'>Home</HeaderLink>
            <HeaderLink href='/posts'>Blog</HeaderLink>
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
