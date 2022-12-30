import { Box, Container, Heading } from '@chakra-ui/react'
import { OrbitControls, Text } from '@react-three/drei'
import { Canvas, type ThreeElements, useFrame } from '@react-three/fiber'
import { FC, useRef } from 'react'
import type { Mesh } from 'three'

import { Model as Monkey } from '@/components/3d_models/Monkey'

const Cube: FC = (props: ThreeElements['mesh']) => {
  const meshRef = useRef<Mesh>(null!)

  useFrame((state, delta) => {
    const mesh = meshRef.current
    mesh.rotation.x += delta
    mesh.rotation.y += delta
  })

  return (
    <mesh {...props} ref={meshRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhongMaterial />
    </mesh>
  )
}

export const Cube_3d: FC = () => {
  return (
    <>
      <Container centerContent>
        <Heading>Custom 3d model</Heading>
      </Container>
      <Box h='520px'>
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 1000,
            position: [0, 0, 5],
          }}
        >
          <OrbitControls />
          <ambientLight args={[0xffffff]} intensity={1000} />
          <directionalLight position={[0, 0, 10]} intensity={20} />
          <directionalLight position={[0, 10, 0]} intensity={20} />
          <directionalLight position={[0, 10, 10]} intensity={20} />
          <directionalLight position={[5, 0, 5]} intensity={20} />
          <directionalLight position={[-5, 0, 5]} intensity={20} />
          <Monkey />
          <Text>Monkey</Text>
        </Canvas>
      </Box>
    </>
  )
}

export default Cube_3d
