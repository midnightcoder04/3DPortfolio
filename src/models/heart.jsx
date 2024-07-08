import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import Heart from '../assets/3d/heart.glb';

const Love = () => {
  const { scene, animations } = useGLTF(Heart);
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);

  // Adjust the material properties to increase brightness
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.emissive = new THREE.Color(0xff0075);
        child.material.emissiveIntensity = 0.7; // Adjust the emissive intensity as needed
      }
    });
  }, [scene]);

  // Play animations by default
  useEffect(() => {
    const spinningAction = actions['Take 001'];
    spinningAction.setLoop(THREE.LoopRepeat);
    spinningAction.reset().play();
    spinningAction.paused = false;
  }, [actions]);

  return (
    <mesh scale={[90,90,90]} position={[-23, 5, -190]} rotation={[0, 0, 0]}>
      <primitive object={scene} ref={ref} />
    </mesh>
  );
};

export default Love;
