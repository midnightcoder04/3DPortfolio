import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import Heli from '../assets/3d/helicopter.glb';
import * as THREE from 'three';

const Helicopter = ({ animate }) => {
  const { scene, animations } = useGLTF(Heli);
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    const startSpinningAction = actions['Start_Spinning'];
    const spinningAction = actions['Spinning'];
    const stopSpinningAction = actions['Stop_Spinning'];

    if (startSpinningAction && spinningAction && stopSpinningAction) {
      startSpinningAction.setLoop(THREE.LoopOnce);
      spinningAction.setLoop(THREE.LoopRepeat);
      stopSpinningAction.setLoop(THREE.LoopOnce);

      const handleStartSpinningFinished = () => {
        if (animate) {
          spinningAction.timeScale = 6;
          spinningAction.reset().play();
        }
      };

      const handleStopSpinningFinished = () => {
        stopSpinningAction.clampWhenFinished = true;
        stopSpinningAction.reset().play();
      };

      if (animate) {
        startSpinningAction.reset().play();
        startSpinningAction.clampWhenFinished = true;
        startSpinningAction.getMixer().addEventListener('finished', handleStartSpinningFinished);
      } else {
        spinningAction.stop();
        stopSpinningAction.reset().play();
        stopSpinningAction.clampWhenFinished = true;
      }

      return () => {
        startSpinningAction.getMixer().removeEventListener('finished', handleStartSpinningFinished);
        spinningAction.stop();
        stopSpinningAction.stop();
      };
    }
  }, [animate, actions]);

  return (
    <mesh scale={[0.05, 0.05, 0.05]} position={[-285, -20.8, -100]} rotation={[0, 1.5, 0]}>
      <primitive object={scene} ref={ref} />
    </mesh>
  );
};

export default Helicopter;
