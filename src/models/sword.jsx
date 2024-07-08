import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import SwordModel from '../assets/3d/sword.glb';

const Sword = () => {
  const { scene } = useGLTF(SwordModel);
  const swordRef = useRef();

  return (
    <>
      <mesh ref={swordRef} scale={[4, 4, 4]} position={[150, -18.5, -350]} rotation={[0, 0, 0]}>
        <primitive object={scene} />
      </mesh>
      <ambientLight color="#FFD700" intensity={0.5} />
      <pointLight
        position={[150, 50, -350]} 
        intensity={4}
        castShadow 
      />
    </>
  );
};

export default Sword;
