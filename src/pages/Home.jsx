import React, { useState, useRef, useEffect } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import Island from '../models/toyisland';
import Loader from '../components/Loader';
import Sky from '../models/sky';
import Birds from '../models/birds';
import Drone from '../models/drone';
import Car from '../models/skyline';
import Sword from '../models/sword';
import Toothless from '../models/toothless';
import Helicopter from '../models/heli';
import Demon from '../models/demon';
import Reaper from '../models/reaper';
import Love from '../models/heart';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [heliAnimate, setHeliAnimate] = useState(false);
  const orbitControlsRef = useRef();
  const droneRef = useRef();
  const groupRef = useRef();

  // Define the 5 points in 3D space along with camera settings
  const points = [
    { 
      position: new THREE.Vector3(-30, -20, 100), 
      camera: { 
        position: new THREE.Vector3(-35, -24, 118), 
        target: new THREE.Vector3(-30, -20, 100) 
      },
      minDistance: 8,
      maxDistance: 20,
      minPolarAngle: Math.PI / 4,
      maxPolarAngle: Math.PI / 1.7
    },
    { 
      position: new THREE.Vector3(0, 0, 0), 
      camera: { 
        position: new THREE.Vector3(-8, -1, 20), 
        target: new THREE.Vector3(0, 0, 0) 
      },
      minDistance: 8,
      maxDistance: 50,
      minPolarAngle: Math.PI / 4,
      maxPolarAngle: Math.PI / 1.7
    },
    { 
      position: new THREE.Vector3(90, -13, -100), 
      camera: { 
        position: new THREE.Vector3(65.5, -15, -130), 
        target: new THREE.Vector3(90, -13, -100) 
      },
      minDistance: 8,
      maxDistance: 60,
      minPolarAngle: Math.PI / 4,
      maxPolarAngle: Math.PI / 1.9
    },
    { 
      position: new THREE.Vector3(159, -6, -346), 
      camera: { 
        position: new THREE.Vector3(160, -3, -322), 
        target: new THREE.Vector3(159, -6, -346) 
      },
      minDistance: 15,
      maxDistance: 80,
      minPolarAngle: Math.PI / 6,
      maxPolarAngle: Math.PI / 1.75
    },
    { 
      position: new THREE.Vector3(-230, -4, -388), 
      camera: { 
        position: new THREE.Vector3(-210, 4, -368), 
        target: new THREE.Vector3(-230, -4, -388) 
      },
      minDistance: 15,
      maxDistance: 60,
      minPolarAngle: Math.PI / 4,
      maxPolarAngle: Math.PI / 1.8
    },
    { 
      position: new THREE.Vector3(-275, -1.5, -150), 
      camera: { 
        position: new THREE.Vector3(-305, 15, -190), 
        target: new THREE.Vector3(-275, -1.5, -150) 
      },
      minDistance: 10,
      maxDistance: 100,
      minPolarAngle: Math.PI / 6,
      maxPolarAngle: Math.PI / 1.9
    },
    { 
      position: new THREE.Vector3(-170, 30, -200), 
      camera: { 
        position: new THREE.Vector3(-183, 34, -208), 
        target: new THREE.Vector3(-170, 30, -200) 
      },
      minDistance: 15,
      maxDistance: 25,
      minPolarAngle: Math.PI / 3.2,
      maxPolarAngle: Math.PI / 1.7
    },
    { 
      position: new THREE.Vector3(-25, 90, -225), 
      camera: { 
        position: new THREE.Vector3(-5, 100, -300), 
        target: new THREE.Vector3(-25, 90, -225) 
      },
      minDistance: 10,
      maxDistance: 200,
      minPolarAngle: Math.PI / 8,
      maxPolarAngle: Math.PI / 1.75
    },
  ];

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-10, -25.5, -250];
    let rotation = [0, 0, 0.0];
    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
    } else {
      screenScale = [0.5, 0.5, 0.5];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustDroneForScreenSize = () => {
    let droneScale;
    let droneRotation = [-0.25, -0.6, -0.3];
    if (window.innerWidth < 768) {
      droneScale = [3, 3, 3];
    } else {
      droneScale = [3, 3, 3];
    }
    return [droneScale, droneRotation];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [droneScale, droneRotation] = adjustDroneForScreenSize();

  // Set the initial target of the OrbitControls to the center of the group
  useEffect(() => {
    if (groupRef.current) {
      const box = new THREE.Box3().setFromObject(groupRef.current);
      const center = box.getCenter(new THREE.Vector3());
      if (orbitControlsRef.current) {
        orbitControlsRef.current.target.copy(center);
      }
    }
  }, [groupRef.current]);

  // Function to move the drone to a specific point
  const moveToPoint = (point) => {
    if (droneRef.current && orbitControlsRef.current) {
      gsap.to([droneRef.current.position, orbitControlsRef.current.target], {
        x: point.position.x,
        y: point.position.y,
        z: point.position.z,
        duration: 2.5,
        ease: 'power2.out',
        onUpdate: () => {
          orbitControlsRef.current.update();
        }
      });

      gsap.to(orbitControlsRef.current.object.position, {
        x: point.camera.position.x,
        y: point.camera.position.y,
        z: point.camera.position.z,
        duration: 2.5,
        ease: 'power2.out',
        onUpdate: () => {
          orbitControlsRef.current.update();
        }
      });

      gsap.to(orbitControlsRef.current.target, {
        x: point.camera.target.x,
        y: point.camera.target.y,
        z: point.camera.target.z,
        duration: 2.5,
        ease: 'power2.out',
        onUpdate: () => {
          orbitControlsRef.current.update();
        }
      });
    }
  };

// Handle keydown events for changing stages
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      setCurrentStage((prevStage) => (prevStage < points.length ? prevStage + 1 : 1));
    } else if (event.key === 'ArrowLeft') {
      setCurrentStage((prevStage) => (prevStage > 1 ? prevStage - 1 : points.length));
    }
  };


  // Add event listener for keydown
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Trigger moveToPoint when currentStage changes
  useEffect(() => {
    moveToPoint(points[currentStage - 1]);
    if (currentStage === 6) {
      setHeliAnimate(true);
    } else {
      setHeliAnimate(false);
    }
  }, [currentStage]);

  return (
    <section className='w-full h-screen relative'>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1500 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight 
            position={[Math.cos(Math.PI / 6), 1, Math.sin(Math.PI / 6)]}
            intensity={1.7} 
            castShadow 
          />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight skyColor="#ffffff" groundColor="#000000" intensity={1.5} />
          <Birds />
          <Sky />
          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Car />
          <Sword />
          <Toothless />
          <Helicopter animate={heliAnimate} />
          <Demon />
          <Reaper />
          <Love />
          <group ref={droneRef}>
            <Drone
              isRotating={isRotating}
              scale={droneScale}
              rotation={droneRotation}
            />
          </group>
          <OrbitControls
            ref={orbitControlsRef}
            minDistance={points[currentStage - 1].minDistance || 10}  
            maxDistance={points[currentStage - 1].maxDistance || 20}  
            minPolarAngle={points[currentStage - 1].minPolarAngle || Math.PI / 4}
            maxPolarAngle={points[currentStage - 1].maxPolarAngle || Math.PI / 1.7}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
