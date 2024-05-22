import React from 'react'
import {useGLTF} from '@react-three/drei'
import Birmd from '../assets/3d/birds.glb'

const Birds = () => {
    const birds = useGLTF(Birmd);
  return (
    <mesh scale={[1.3,1.3,1.3]} position={[-3, 1, 0]} rotation={[0.3,-0.5,0]}>
        <primitive object={birds.scene} />
    </mesh>
  )
}

export default Birds