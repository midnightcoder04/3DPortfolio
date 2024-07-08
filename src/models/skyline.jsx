import React from 'react'
import {useGLTF} from '@react-three/drei'
import Cars from '../assets/3d/skylinegtr.glb'

const Car = () => {
    const car = useGLTF(Cars);
  return (
    <mesh scale={[4,4,4]} position={[80, -21.25, -110]} rotation={[0,1.1,0]}>
        <primitive object={car.scene} />
    </mesh>
  )
}

export default Car