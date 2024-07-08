import React from 'react'
import {useGLTF} from '@react-three/drei'
import SeaSky from '../assets/3d/Sky4.glb'

const Sky = () => {
    const sky = useGLTF(SeaSky);
  return (
    <mesh scale={[3.5,2,3.5]} position={[0, 200, 0]} rotation={[0,0,0]}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky