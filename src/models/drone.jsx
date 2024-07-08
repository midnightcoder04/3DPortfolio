import MechDrone from '../assets/3d/drone.glb';
import React, { useState, useRef, useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Drone = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(MechDrone);
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);
  const [deployed, setDeployed] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const deployAction = actions?.deploy;
    const hoverAction = actions?.['idle/hover'];

    let hoverInterval;

    const playHoverSegment = () => {
      if (!hoverAction) return;
      hoverAction.time = 3.0;
      hoverAction.reset().play();
      hoverAction.paused = false;

      hoverInterval = setInterval(() => {
        if (hoverAction.time >= 4.94) {
          hoverAction.time = 3.0; // Reset to the start of the segment
        }
      }, 5); // Check every 10ms
    };

    if (deployAction && hoverAction) {
      deployAction.setLoop(THREE.LoopOnce); // Play deploy animation once
      hoverAction.setLoop(THREE.LoopRepeat); // Loop the hover animation

      if (deployed) {
        deployAction.reset().play();
        // deployAction.clampWhenFinished = true;
        deployAction.loop = THREE.LoopOnce;
        deployAction.play();
        setHovering(true);
        playHoverSegment();
      } else if (hovering) {
        playHoverSegment();
      }
    }

    return () => {
      clearInterval(hoverInterval);
    };
  }, [deployed, hovering, actions]);

  useEffect(() => {
    const handleKeyDown = () => {
      if (!deployed) {
        setDeployed(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [deployed]);

  return <primitive object={scene} ref={ref} {...props} />;
};

export default Drone;
