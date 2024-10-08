import React from 'react'
import {useGLTF} from '@react-three/drei'
import Reaperboy from '../assets/3d/reaper.glb'

const Reaper = ({onClick}) => {
    const r = useGLTF(Reaperboy);
    const handleClick = onClick();
  return (
    <mesh onClick={handleClick} scale={[0.03,0.03,0.03]} position={[-165, 27.5, -186]} rotation={[0,3.5,0]}>
        <primitive object={r.scene} />
    </mesh>
  )
}

export default Reaper