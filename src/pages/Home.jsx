import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
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
import HomeInfo from '../components/HomeInfo';
import Enter from '../components/Enter';

const Home = () => {
  const [isLaunched, setIsLaunched] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [heliAnimate, setHeliAnimate] = useState(false);
  const [foundObjects, setFoundObjects] = useState([false, false, false, false ]);
  const [easterEgg, setEasterEgg] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [currentAudioFile, setCurrentAudioFile] = useState('');
  const [audioPlaying, setAudioPlaying] = useState(false);
  const orbitControlsRef = useRef();
  const droneRef = useRef();


  //points in 3D space where the drone will move to (Hope it moves)
  const points = useMemo(() => [
    { 
      position: new THREE.Vector3(-30, -22, 100), 
      camera: { 
        position: new THREE.Vector3(-35, -24, 118), 
        target: new THREE.Vector3(-30, -20, 100) 
      },
      minDistance: 5,
      maxDistance: 20,
      minPolarAngle: Math.PI / 4,
      maxPolarAngle: Math.PI / 1.7
    },
    { 
      position: new THREE.Vector3(-2, -4, 7), 
      camera: { 
        position: new THREE.Vector3(-5, -1, 17), 
        target: new THREE.Vector3(0, -4, 2) 
      },
      minDistance: 10,
      maxDistance: 40,
      minPolarAngle: Math.PI / 6,
      maxPolarAngle: Math.PI / 1.5
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
  ], []);


  //Easter egg to true if all objects are found by you
  const handleObjectClick = useCallback((index) => () => {
    if (foundObjects[index]) { return; }
    const newFoundObjects = [...foundObjects];
    newFoundObjects[index] = true;
    setFoundObjects(newFoundObjects);
    if (newFoundObjects.every(found => found)) {
      // Show special message or unlock hidden content (probably the former)
      setEasterEgg(true);
    }
  }, [foundObjects]);
    //Easter Egg Candidates, hehe
    const clickableObjects = useMemo(() => [
      { name: 'Sword', onClick: () => handleObjectClick(0) },
      { name: 'Helicopter', onClick: () => handleObjectClick(1) },
      { name: 'Reaper', onClick: () => handleObjectClick(2) },
      { name: 'Love', onClick: () => handleObjectClick(3)}
    ], [handleObjectClick]);


  const adjustIslandForScreenSize = useCallback(() => {
    let screenScale = null;
    let screenPosition = [-10, -25.5, -250];
    let rotation = [0, 0, 0.0];
    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
    } else {
      screenScale = [0.5, 0.5, 0.5];
    }
    return [screenScale, screenPosition, rotation];
  }, []);

  const adjustDroneForScreenSize = useCallback(() => {
    let droneScale;
    let droneRotation = [-0.25, -0.6, -0.3];
    if (window.innerWidth < 768) {
      droneScale = [3, 3, 3];
    } else {
      droneScale = [3, 3, 3];
    }
    return [droneScale, droneRotation];
  }, []);
  

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [droneScale, droneRotation] = adjustDroneForScreenSize();

  // Set the initial target of the OrbitControls to the center of the group
  // useEffect(() => {
  //   if (orbitControlsRef.current && droneRef.current) {
  //     orbitControlsRef.current.object.position.copy(points[0].camera.position);
  //     orbitControlsRef.current.target.copy(points[0].camera.target);
  //     droneRef.current.position.copy(points[0].position);
  //     orbitControlsRef.current.update();
  //   }
  // }, [modelLoaded]);


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

  //Sound for easteregg
  const playSound = (soundFile) => {
    if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0;}
    const audio = new Audio(soundFile);
    setCurrentAudioFile(soundFile);
    audio.volume = 0.4;
    audio.play();
    setCurrentAudio(audio);
  };
  const togglePlayPause = () => {
     if(currentAudio)
       if(currentAudio.paused) {
        currentAudio.play();
        } else { currentAudio.pause(); } };

  const playBGM = (soundFile) => {
    if (currentAudio && currentAudioFile === '/bgm.mp3') {
      if(currentAudio.paused) { currentAudio.play(); setAudioPlaying(true); } 
      else { currentAudio.pause(); setAudioPlaying(false); }
      }
    else {
      const audio = new Audio(soundFile);
      audio.volume = 0.4;
      audio.play();
      setCurrentAudio(audio);
      setCurrentAudioFile(soundFile);
      setAudioPlaying(true);
    }
  };  

  const resetEasterEgg = () => {
    setEasterEgg(false);
    setFoundObjects([false, false, false, false]);
    if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0;}
  };

// Handle keydown events for changing stages
  const handleKeyDown = useCallback((event) => {
    if (!isLaunched) { setIsLaunched(true); }
    if (event.key === 'ArrowRight' || event.key === 'D' || event.key === 'd') {
      setCurrentStage((prevStage) => (prevStage < points.length ? prevStage + 1 : 2));
    } else if (event.key === 'ArrowLeft' || event.key === 'A' || event.key === 'a') {
      setCurrentStage((prevStage) => (prevStage > 1 ? prevStage - 1 : points.length));
    }
  }, [isLaunched, points.length]);

  const handleTouchStart = () => { 
    if (!isLaunched) { setIsLaunched(true); }
    // if (event.touches[0].clientX < window.innerWidth / 2) {
    //   setCurrentStage((prevStage) => (prevStage > 1 ? prevStage - 1 : points.length));
    // } else {
    //   setCurrentStage((prevStage) => (prevStage < points.length ? prevStage + 1 : 2));
    // }
  }

  // Add event listener for keydown
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('click', handleTouchStart);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('click', handleTouchStart);
    };
  }, []);

  // Trigger moveToPoint when currentStage changes
  useEffect(() => {
      moveToPoint(points[currentStage - 1]);
      setHeliAnimate(currentStage === 6);
  }, [currentStage]);

  return (
    <section className='w-full h-screen relative'>
      {!isLaunched && <Enter />}

      { isLaunched && <HomeInfo currentStage={currentStage} easterEgg={easterEgg} />}

      { isLaunched && <div><button className='block absolute z-10 h-20 w-8 fade-arrow
      bottom-2/4 right-2 p-1 bg-black text-white rounded-2xl cursor-pointer'
      onClick={() => setCurrentStage((prevStage) => (prevStage < points.length ? prevStage + 1 : 1))}>
        <span className='text-bold text-2xl'>&gt;</span>
      </button>
      <button className='block absolute z-10 h-20 w-8 fade-arrow
      bottom-2/4 left-2 p-1 bg-black text-white rounded-2xl cursor-pointer'
      onClick={() => setCurrentStage((prevStage) => (prevStage > 1 ? prevStage - 1 : points.length))}>
        <span className='text-bold text-2xl'>&lt;</span></button>
      <button className={`block absolute z-10 h-12 lg:h-14 w-12 lg:w-14 bg-opacity-50 ${audioPlaying ? 'bg-black animate-pulse' : 'bg-red-950'}
      bottom-12 md:bottom-14 lg:bottom-16 left-6 sm:left-8 md:left-10 lg:left-12 m-1 text-white rounded-full cursor-pointer`}
      onClick={() => playBGM('/bgm.mp3')}>
        <span className='text-bold text-2xl lg:text-3xl'>⋆.˚📼</span></button>
        
        </div>}

      {easterEgg && <div className='absolute top-0 left-0 right-0 bottom-0 z-20 flex items-center justify-center bg-black bg-opacity-50'>
        <div className=" bg-transparent flex items-center justify-center opacity-80 w-full">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-8 animate-pulse hover:animate-bounce ">🫧</h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-8 animate-pulse hover:animate-bounce">✨</h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl animate-pulse hover:animate-bounce">🎉</h1>
        </div>
        <div className="grid grid-cols-3 m-3 gap-4 md:gap-5 lg:gap-6">
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-auto hover:bg-slate-900 opacity-80" onClick={() => playSound('/s1.mp3')}></div>
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-auto hover:bg-slate-900 opacity-80" onClick={() => playSound('/s2.mp3')}> </div>
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-auto hover:bg-slate-900 opacity-80" onClick={() => playSound('/s3.mp3')}> </div>
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-auto hover:bg-slate-900 opacity-80" onClick={() => playSound('/s4.mp3')}> </div>
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-auto hover:bg-slate-900 opacity-80" onClick={() => playSound('/s5.mp3')}> </div>
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-auto hover:bg-slate-900 opacity-80" onClick={() => playSound('/s6.mp3')}> </div>
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-auto hover:bg-slate-900 opacity-80" onClick={() => playSound('/s7.mp3')}> </div>
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-auto hover:bg-slate-900 opacity-80" onClick={() => playSound('/s8.mp3')}> </div>
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-auto hover:bg-slate-900 opacity-80" onClick={() => playSound('/s9.mp3')}> </div>
        </div>
        </div>
        <div className="absolute bottom-6 flex space-x-4">
            <button
              className="bg-slate-900 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full opacity-80 hover:opacity-100"
              onClick={resetEasterEgg}
            >
              ╰┈➤🚪
            </button>
            <button
              className="bg-slate-900 hover:bg-lime-400 text-white font-bold py-2 px-4 rounded-full opacity-80 hover:opacity-100"
              onClick={togglePlayPause}
            >
              ▶︎|◼
            </button>
          </div>
      </div>}


      <Canvas className={`w-full h-screen bg-transparent `} 
      camera={{ near: 0.1, far: 1500, position: [-35, -24, 118] }}>
        <Suspense fallback={<Loader />}>
          <directionalLight 
            position={[Math.cos(Math.PI / 6), 1, Math.sin(Math.PI / 6)]}
            intensity={1.5} 
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
            // isRotating={isRotating}
            // setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Car />
          <Sword onClick={clickableObjects[0].onClick} />
          <Toothless />
          <Helicopter animate={heliAnimate} onClick={clickableObjects[1].onClick}/>
          <Demon />
          <Reaper onClick={clickableObjects[2].onClick}/>
          <Love onClick={clickableObjects[3].onClick}/>
          <group ref={droneRef} position={points[currentStage - 1].position}>
            <Drone
              scale={droneScale}
              rotation={droneRotation}
              isLaunched={isLaunched}
            />
          </group>
          <OrbitControls
            ref={orbitControlsRef}
            // target={points[currentStage - 1].camera.target}
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
