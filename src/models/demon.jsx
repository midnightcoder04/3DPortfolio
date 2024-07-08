import React from 'react'
import {useGLTF} from '@react-three/drei'
import Demonboy from '../assets/3d/demonboy.glb'

const Demon = () => {
    const db = useGLTF(Demonboy);
  return (
    <mesh scale={[2.5,2.5,2.5]} position={[-135, 39.1, -190]} rotation={[0,-1.8,0]}>
        <primitive object={db.scene} />
    </mesh>
  )
}

export default Demon