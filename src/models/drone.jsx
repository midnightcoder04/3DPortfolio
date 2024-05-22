import React, { useState, useRef, useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import MechDrone from '../assets/3d/drone.glb';
import * as THREE from 'three';

const Drone = ({isRotating, ...props }) => {
  const { scene, animations } = useGLTF(MechDrone);
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);
  const [currentState, setCurrentState] = useState(false);
  // const [isDeployed, setIsDeployed] = useState(false);

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
        setCurrentState(true);
      }
      if (currentState){
        deployAction.reset().play();
        console.log('Hovering!');
        playHoverSegment();
      }
      else {
        deployAction.stop();
        hoverAction.stop();
      }
    }

    // Cleanup intervals when component unmounts or dependencies change
    return () => {
      clearInterval(hoverInterval);
      clearInterval(deployInterval);
    };
  }, [actions ,isRotating]);

  return (
    <group ref={ref}>
      <primitive object={scene} {...props} />
    </group>
  );
};

export default Drone;
