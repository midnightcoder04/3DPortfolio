import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import Birmd from '../assets/3d/birds.glb';
import * as THREE from 'three';

const Birds = () => {
  const group = useRef();
  const { scene, animations } = useGLTF(Birmd);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions['Scene']) {
      actions['Scene'].play();
    }
  }, [actions]);

  // Parameters for the movement pattern
  const radius = 235; // Adjust radius as needed
  const speed = 0.1; // Adjust speed as needed

  // Island coordinates
  const islandX = -40;
  const islandY = 0;
  const islandZ = -200;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;

    // Circular motion parameters
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;

    // Adding some vertical oscillation
    const y = Math.sin(t * 2) * 5;

    if (group.current) {
      // Adjust the position of the birds around the island coordinates
      const newX = x + islandX;
      const newY = y + islandY + 15; // Adjust the y offset as needed
      const newZ = z + islandZ;

      // Set the position
      group.current.position.set(newX, newY, newZ);

      // Compute the direction of movement
      const nextX = Math.cos(t + 0.01) * radius + islandX;
      const nextZ = Math.sin(t + 0.01) * radius + islandZ;
      const direction = new THREE.Vector3(nextX - newX, 0, nextZ - newZ).normalize();

      // Set the rotation to face the direction of movement
      group.current.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 0, 1), // Initial forward direction
        direction
      );
    }
  });

  return (
    <group ref={group} scale={[3, 3, 3]}>
      <primitive object={scene} />
    </group>
  );
};

export default Birds;
