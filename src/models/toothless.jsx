import React from 'react'
import {useGLTF} from '@react-three/drei'
import Dragon from '../assets/3d/toothless.glb'

const Toothless = () => {
    const tl = useGLTF(Dragon);
  return (
    <mesh scale={[2.5,2.5,2.5]} position={[-240, -19.5, -390]} rotation={[0,1.3,0]}>
        <primitive object={tl.scene} />
    </mesh>
  )
}

export default Toothless