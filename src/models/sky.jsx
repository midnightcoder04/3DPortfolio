import React from 'react'
import {useGLTF} from '@react-three/drei'
import SeaSky from '../assets/3d/Sky4.glb'

const Sky = () => {
    const sky = useGLTF(SeaSky);
  return (
    <mesh scale={[3.8,2,3.5]} position={[0, 250.5, -60]} rotation={[0.25,0,0]}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky