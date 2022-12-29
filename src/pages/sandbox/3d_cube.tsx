import { Box, Container, Heading } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { FC, useRef } from 'react'
import type { Mesh } from 'three'

const Cube: FC = () => {
  const cubeRef = useRef<Mesh>(null!)

  useFrame(() => {
    const cube = cubeRef.current
    if (!cube) return
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
  })

  return (
    <mesh ref={cubeRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color='hotpink' />
    </mesh>
  )
}

export const Cube_3d: FC = () => {
  return (
    <>
      <Container centerContent>
        <Heading>Hello, 3d!</Heading>
      </Container>
      <Box>
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 1000,
            position: [0, 0, 5],
          }}
        >
          <OrbitControls />
          <ambientLight args={[0xffffff]} intensity={0.2} />
          <directionalLight position={[1, 1, 1]} intensity={0.8} />
          <Cube />
        </Canvas>
      </Box>
    </>
  )
}

export default Cube_3d
