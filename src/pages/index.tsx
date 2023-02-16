import { Box, Container, Heading, Link, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
import { Inter } from '@next/font/google'
import NextLink from 'next/link'

import { Head } from '@/components/common/Head'
import { Header } from '@/components/common/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head title='About me' description='About me' />
      <Header />
      <main>
        <Container centerContent>
          <Stack spacing={8}>
            <Box>
              <Heading as='h1' pb={2}>
                Rai
              </Heading>
              <Text as='p'>
                I&apos;m a student at the Tokyo University of Science, majoring in Information Science.
              </Text>
            </Box>
            <Box>
              <Heading as='h2' pb={2}>
                Programming
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>Python</ListItem>
                <ListItem>Rust</ListItem>
                <ListItem>Typescript</ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Heading as='h2' pb={2}>
                Interests
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>Tauri</ListItem>
                <ListItem>WebAssembly</ListItem>
                <ListItem>Compiler</ListItem>
                <ListItem>3DCG</ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Heading as='h2' pb={2}>
                Links
              </Heading>
              <UnorderedList pl={2}>
                <ListItem>
                  <Link as={NextLink} href='https://github.com/r4ai'>
                    GitHub
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={NextLink} href='https://zenn.dev/t4aru'>
                    Zenn
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
        </Container>
      </main>
    </>
  )
}
