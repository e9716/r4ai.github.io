import { OrbitControls } from '@react-three/drei'
import { Canvas, type ThreeElements, useFrame } from '@react-three/fiber'
import { FC, useRef, useState } from 'react'
import { Vector3 } from 'three'
import type { Mesh } from 'three'

import { Layout } from '@/components/layouts/Layout'

function Rig({ v = new Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05)
  })
}

const Cube: FC = (props: ThreeElements['mesh']) => {
  const meshRef = useRef<Mesh>(null!)

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    const mesh = meshRef.current
    mesh.rotation.x += delta
    mesh.rotation.y += delta
  })

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 3 : 2}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={hovered ? 'limegreen' : 'gray'} />
    </mesh>
  )
}

export const Cube_3d: FC = () => {
  return (
    <>
      <Layout title='3d cube' description='3d cube' className=''>
        <div>
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
        </div>
      </Layout>
    </>
  )
}

export default Cube_3d
