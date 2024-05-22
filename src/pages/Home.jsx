import React, { useState } from 'react'
import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import Island from '../models/toyisland'
import Loader from '../components/Loader'
import Sky from '../models/sky'
import Birds from '../models/birds'
import Drone from '../models/drone'

{/* <div className='absolute top-20 left-0 right-0 z-10 flex
items-center justify-center'>
  POPUP
</div> */}
const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-10, -30.5, -330];
    let rotation = [0.5,3.0,0.0];
    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    }
    else {
      screenScale = [1.0, 1.0, 1.0];
    }
    return [screenScale, screenPosition, rotation]
  }
  const adjustDroneForScreenSize = () => {
    let droneScale, dronePosition;
    let droneRotation = [0.25,-0.8,-0.2];
    if(window.innerWidth < 768) {
      droneScale = [2,2,2];
      dronePosition = [0, -2.5, 1];
    }
    else {
      droneScale = [3,3,3];
      dronePosition = [0, -3.5, -0.5];
    }
    return [droneScale, dronePosition, droneRotation]
  }
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [droneScale, dronePosition, droneRotation] = adjustDroneForScreenSize();
  return (
    <section className='w-full h-screen relative'>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ?
       'cursor-grabbing' : 'cursor-grab'}`}
      camera={{ near: 0.1, far: 1000}}>
      <Suspense fallback={<Loader/>}>
        <directionalLight position={[1,1,1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight />
        <spotLight />
        <hemisphereLight skyColor="#ffffff" groundColor="#000000"
        intensity = {1.5}/>
        <Birds />
        <Sky />
        <Island
        scale = {islandScale}
        position = {islandPosition}
        rotation = {islandRotation}
        isRotating = {isRotating}
        setIsRotating = {setIsRotating}
        setCurrentStage = {setCurrentStage}/>
        <Drone 
        isRotating = {isRotating}
        scale = {droneScale}
        position = {dronePosition}
        rotation = {droneRotation}/>
      </Suspense>
      </Canvas>

      </section>
  )
}

export default Home