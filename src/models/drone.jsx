import MechDrone from '../assets/3d/drone.glb';
import React, { useState, useRef, useEffect } from 'react';
import {useFrame, useThree} from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Drone = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(MechDrone);
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);
  const [tiltSpeed, setTiltSpeed] = useState(0);
  const tiltFactor = 0.5; // Adjust this value to control tilt sensitivity

  useEffect(() => {
    const deployAction = actions?.deploy;
    const hoverAction = actions?.['idle/hover'];

    let hoverInterval;
    let deployInterval;

    const playHoverSegment = () => {
      hoverAction.time = 3.0;
      hoverAction.reset().play();
      hoverAction.paused = false;
      
      hoverInterval = setInterval(() => {
        if (hoverAction.time >= 4.95) {
          hoverAction.time = 3.0; // Reset to the start of the segment
        }
      }, 5); // Check every 10ms
    };

    if (deployAction && hoverAction) {
      deployAction.setLoop(THREE.LoopOnce); // Play deploy animation once
      hoverAction.setLoop(THREE.LoopRepeat); // Loop the hover animation

      if (isRotating) {
        deployAction.reset().play();
        console.log('Hovering!');
        playHoverSegment();
      } 
    }

    // Cleanup intervals when component unmounts or dependencies change
    return () => {
      clearInterval(hoverInterval);
      clearInterval(deployInterval);
    };
  }, [isRotating, actions]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setTiltSpeed(-0.1); // Set tilt speed to tilt left
      } else if (event.key === 'ArrowLeft') {
        setTiltSpeed(0.1); // Set tilt speed to tilt right
      }
    };

    const handleKeyUp = () => {
      setTiltSpeed(0); // Stop tilting on key up
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame(() => {
    // Apply tilt effect to the drone
    ref.current.rotation.z = tiltSpeed * tiltFactor;
  });

  return <primitive object={scene} ref={ref} {...props} />;
};

export default Drone;

