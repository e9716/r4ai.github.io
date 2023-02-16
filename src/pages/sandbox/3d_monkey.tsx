import { Html, OrbitControls, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FC, Suspense } from 'react'

import { Model as Monkey } from '@/components/3d_models/Monkey'

const Loader: FC = () => {
  const { progress } = useProgress()
  return (
    <Html>
      <div className='text-center font-bold'>{progress} % loaded</div>
    </Html>
  )
}

export const Monkey_3d: FC = () => {
  return (
    <>
      <div className='h-64'>
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 1000,
            position: [0, 0, 5],
          }}
        >
          <Suspense fallback={<Loader />}>
            <OrbitControls />
            <ambientLight args={[0xffffff]} intensity={1000} />
            <directionalLight position={[0, 0, 10]} intensity={20} />
            <directionalLight position={[0, 10, 0]} intensity={20} />
            <directionalLight position={[0, 10, 10]} intensity={20} />
            <directionalLight position={[5, 0, 5]} intensity={20} />
            <directionalLight position={[-5, 0, 5]} intensity={20} />
            <Monkey />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default Monkey_3d
