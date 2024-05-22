/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame, useThree} from '@react-three/fiber'
import toyIsland from '../assets/3d/toyisland.glb'
import {a} from '@react-spring/three'
 
export default function Island({isRotating, setIsRotating, setCurrentStage, ...props}) {
  const islandRef = useRef();
  const {gl, viewport} = useThree();
  const { nodes, materials } = useGLTF(toyIsland);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
  }
  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }
  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if(isRotating) {
      const clientX = e.touces ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      lastX.current = clientX;
      islandRef.current.rotation.y += delta * Math.PI * 0.01;
      rotationSpeed.current = delta * Math.PI * 0.01;
    }
  }
  const handleKeyDown = (e) => {
    if(e.key === 'ArrowRight') {
      if(isRotating) setisRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
    }
    else if(e.key === 'ArrowLeft') {
      if(isRotating) setisRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
    }
  }
  const handleKeyUp = (e) => {
    if(e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      setisRotating(false);
    }
  }
  useFrame(() => {
    if(!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if(Math.abs(rotationSpeed.current) < 0.0001) {
        rotationSpeed.current = 0;
      }
      islandRef.current.rotation.y += rotationSpeed.current;
    }
      else {
        const rotation = islandRef.current.rotation.y;
        const realRotation = ((rotation % (2* Math.PI)) + 2 * Math.PI) % ( 2 * Math.PI )
      switch(true) {
        case realRotation < 0.1:
          setCurrentStage(1);
          break;
        case realRotation < Math.PI / 2:
          setCurrentStage(2);
          break;
        case realRotation < Math.PI:
          setCurrentStage(3);
          break;
        case realRotation < 3 * Math.PI / 2:
          setCurrentStage(4);
          break;
        default:
          setCurrentStage(null);
      }
    }
  })
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group ref={islandRef} {...props} >
      <mesh
        geometry={nodes.Ball_Mat_0.geometry}
        material={materials.Mat_5}
      />
      <group position={[-76.118, 45.202, 45.122]}>
        <group position={[-18.693, -40.404, -15.471]}>
          <mesh
            geometry={nodes.Base_3_Mat_0.geometry}
            material={materials.Mat_10}
            position={[-44.398, -6.393, 33.504]}
            rotation={[0, 0.787, 0]}
          />
          <mesh           
            geometry={nodes.Cube_1_7_Mat_0.geometry}
            material={materials.material}
            position={[-401.471, -4.005, -278.405]}
            rotation={[0, 0.395, 0]}
          />
          <mesh
            geometry={nodes.Cube_8_2_Mat_0.geometry}
            material={materials.Mat_2}
            position={[-10.985, -1.936, -118.057]}
            rotation={[0, 0.395, 0]}
          />
          <mesh
            geometry={nodes.Cylinder_10_3_Mat_0.geometry}
            material={materials.Mat_5}
            position={[407.473, 3.96, -235.998]}
            rotation={[0, 1.374, 0]}
          />
          <mesh 
            geometry={nodes.Cylinder_11_3_Mat_0.geometry}
            material={materials.Mat_14}
            position={[289.016, 0.786, 176.722]}
            rotation={[0, 1.374, 0]}
          />
          <mesh   
            geometry={nodes.Cylinder_14_Mat_0.geometry}
            material={materials.Mat_9}
            position={[-481.271, -0.37, 299.615]}
            rotation={[0, 1.374, 0]}
          />
          <mesh 
            geometry={nodes.Cylinder_1_12_Mat_0.geometry}
            material={materials.Mat_12}
            position={[-125.605, -3.834, -394.498]}
            rotation={[0, 0.787, 0]}
          />
          <mesh  
            geometry={nodes.Cylinder_2_13_Mat_0.geometry}
            material={materials.material}
            position={[-121.511, -3.346, 387.36]}
            rotation={[Math.PI, -0.791, Math.PI]}
          />
          <mesh
            geometry={nodes.Cylinder_3_11_Mat_0.geometry}
            material={materials.Mat_14}
            position={[269.16, -4.042, -231.968]}
            rotation={[-Math.PI, 1.569, -Math.PI]}
          />
          <mesh  
            geometry={nodes.Cylinder_5_4_Mat_0.geometry}
            material={materials.Mat_7}
            position={[-286.528, -3.635, -2.473]}
            rotation={[-Math.PI, 1.567, -Math.PI]}
          />
          <mesh    
            geometry={nodes.Cylinder_6_2_Mat_0.geometry}
            material={materials.Mat_2}
            position={[-370.41, 2.229, -257.153]}
            rotation={[0, 1.374, 0]}
          />
          <mesh         
            geometry={nodes.Cylinder_9_3_Mat_0.geometry}
            material={materials.Mat_7}
            position={[414.283, -3.324, 132.896]}
            rotation={[Math.PI, -0.791, Math.PI]}
          />
        </group>
        <group position={[-64.665, 59.278, -66.443]} rotation={[0, 1.059, 0]} scale={0.1}>
          <group position={[66.125, 125.074, -172.399]} rotation={[0, 0, -0.334]}>
            <group position={[-31.662, -171.55, 236.649]} rotation={[0.021, -0.106, 0.29]}>
              <mesh           
                geometry={nodes.BODY__0.geometry}
                material={materials.BODY__0}
                position={[16.18, 49.574, -5.07]}
                rotation={[0.01, 0.108, -0.338]}
              />
              <mesh
                geometry={nodes.Sphere_1_Mat_0.geometry}
                material={materials.Mat_0}
                position={[35.643, 102.151, -8.064]}
                rotation={[3.102, -0.011, -2.761]}
              />
            </group>
            <mesh            
              geometry={nodes.Cube_Mat_0.geometry}
              material={materials.material}
              position={[-326.439, -616.844, 586.811]}
              rotation={[0.233, 1.092, -0.131]}
            />
            <mesh           
              geometry={nodes.Cube_1_Mat_0.geometry}
              material={materials.Mat_0}
              position={[-514.965, -669.897, -78.774]}
              rotation={[-0.033, -0.048, 0.794]}
            />
            <mesh         
              geometry={nodes.Hand_Mat1_0.geometry}
              material={materials['Mat.1']}
              position={[-23.938, 0, 137.13]}
            />
            <mesh            
              geometry={nodes.Sweep_Mat1_0.geometry}
              material={materials['Mat.1']}
              position={[-39.17, -69.237, 278.606]}
              rotation={[0.016, -0.314, 0.207]}
            />
          </group>
          <group position={[-11.685, 201.28, 64.749]} rotation={[0, 0, Math.PI / 2]}>
            <group position={[-13.463, -75.568, 0.176]} rotation={[-0.336, 0.134, -0.616]}>
              <mesh               
                geometry={nodes.Face_Mat1_0.geometry}
                material={materials['Mat.1_1']}
              />
              <mesh             
                geometry={nodes.Face_Mat3_0.geometry}
                material={materials['Mat.3']}
              />
              <mesh    
                geometry={nodes.Face_Mat_0.geometry}
                material={materials.Mat_0}
              />
              <mesh                
                geometry={nodes.Face_Mat_0001.geometry}
                material={materials.Mat_1}
              />
            </group>
            <group position={[-21.208, -68.79, -0.896]} rotation={[-0.336, 0.134, -0.452]}>
              <mesh              
                geometry={nodes.Tube_2_Mat1_0.geometry}
                material={materials['Mat.1_0']}
                position={[-88.637, -12.717, -5.611]}
                rotation={[0, 0, 1.642]}
              />
            </group>
          </group>
        </group>
        <group position={[70.826, 13.592, -45.122]}>
          <group position={[5.292, -29.315, 0]}>
            <group position={[1.868, 52.016, 21.8]}>
              <mesh            
                geometry={nodes.Cylinder_13_2_Mat_0.geometry}
                material={materials.Mat_5}
              />
              <mesh          
                geometry={nodes.Cylinder_13_2_Mat_0001.geometry}
                material={materials.material}
              />
            </group>
            <group position={[0, 37.066, 0]}>
              <mesh             
                geometry={nodes.Cylinder_3_10_Mat1_0.geometry}
                material={materials['Mat.1_4']}
              />
              <mesh         
                geometry={nodes.Cylinder_3_10_Mat1_0001.geometry}
                material={materials['Mat.1_11']}
              />
              <mesh         
                geometry={nodes.Cylinder_3_10_Mat1_0002.geometry}
                material={materials['Mat.1_3']}
              />
            </group>
            <group position={[0, -3.113, 0]}>
              <mesh              
                geometry={nodes.Cylinder_4_7_Mat1_0.geometry}
                material={materials['Mat.1_5']}
              />
              <mesh             
                geometry={nodes.Cylinder_4_7_Mat1_0001.geometry}
                material={materials['Mat.1_13']}
              />
              <mesh
                geometry={nodes.Cylinder_4_7_Mat_0.geometry}
                material={materials.Mat_10}
              />
              <mesh             
                geometry={nodes.Cylinder_4_7_Mat_0001.geometry}
                material={materials.Mat_2}
              />
            </group>
            <mesh            
              geometry={nodes.Cylinder_1_11_Mat_0.geometry}
              material={materials.Mat_0}
              position={[0, 25.555, 0]}
            />
          </group>
          <mesh         
            geometry={nodes.Capsule_1_2_Mat1_0.geometry}
            material={materials['Mat.1_11']}
            position={[-75.57, 35.809, -64.155]}
            rotation={[-Math.PI / 2, 0, 0.787]}
          />
          <mesh         
            geometry={nodes.Connect_Mat1_0.geometry}
            material={materials['Mat.1_12']}
            position={[7.135, -58.793, -0.921]}
          />
          <mesh          
            geometry={nodes.Cube_7_2_Mat_0.geometry}
            material={materials.Mat_0}
            position={[29.008, 35.687, 40.061]}
            rotation={[0, -0.784, Math.PI / 2]}
          />
          <mesh          
            geometry={nodes.Cylinder_12_2_Mat4_0.geometry}
            material={materials['Mat.4']}
            position={[15.844, 36.687, 17.533]}
            rotation={[-Math.PI / 2, 0, -0.788]}
          />
          <mesh           
            geometry={nodes.Cylinder_1_10_Mat4_0.geometry}
            material={materials['Mat.4']}
            position={[17.71, 36.687, 10.32]}
            rotation={[-Math.PI / 2, 0, -0.788]}
          />
          <mesh          
            geometry={nodes.Cylinder_2_11_Mat3_0.geometry}
            material={materials['Mat.3']}
            position={[-63.934, -51.295, -61.156]}
            rotation={[-Math.PI, -0.787, 0]}
          />
          <mesh          
            geometry={nodes.Cylinder_3_9_Mat1_0.geometry}
            material={materials['Mat.1_14']}
            position={[-11.851, 36.02, -6.99]}
            rotation={[-Math.PI / 2, 0, -0.788]}
          />
          <mesh          
            geometry={nodes.Cylinder_4_8_Mat1_0.geometry}
            material={materials['Mat.1_14']}
            position={[-44.762, 35.898, -40.084]}
            rotation={[-Math.PI / 2, 0, -0.788]}
          />
          <mesh         
            geometry={nodes.Cylinder_5_3_Mat1_0.geometry}
            material={materials['Mat.1_14']}
            position={[-78.409, 35.4, -73.919]}
            rotation={[-Math.PI / 2, 0, -0.788]}
          />
          <mesh
            geometry={nodes.Star_Mat3_0.geometry}
            material={materials['Mat.3']}
            position={[-110.793, -54.983, -70.722]}
          />
        </group>
        <group position={[206, 137.086, -45.122]} rotation={[0, 0, Math.PI]}>
          <group position={[10.484, 12.495, 0]} rotation={[0, 0, Math.PI]}>
            <group position={[1.509, -42.396, 0.564]} rotation={[0.08, 0, 0]}>
              <mesh
                geometry={nodes.Top_torus_Mat1_0.geometry}
                material={materials['Mat.1_6']}
              />
              <mesh            
                geometry={nodes.Top_torus_Mat1_0001.geometry}
                material={materials['Mat.1_7']}
              />
              <mesh             
                geometry={nodes.Top_torus_Mat1_0002.geometry}
                material={materials['Mat.1_8']}
              />
            </group>
            <group position={[1.509, -34.365, 1.212]} rotation={[0.08, 0, 0]}>
              <mesh         
                geometry={nodes.Top_torus_2_Mat4_0.geometry}
                material={materials['Mat.4']}
              />
              <mesh
                geometry={nodes.Top_torus_2_Mat5_0.geometry}
                material={materials['Mat.5']}
              />
            </group>
            <mesh       
              geometry={nodes.Bottom_torus_Mat_0.geometry}
              material={materials.Mat_2}
              position={[1.509, -57.343, 0.906]}
              rotation={[0.137, 0, 0]}
            />
            <mesh
              geometry={nodes.Top_torus_1_Mat_0.geometry}
              material={materials.Mat_3}
              position={[1.509, -49.957, 2.406]}
              rotation={[0.134, 0, 0]}
            />
          </group>
          <group position={[9.715, 88.715, 0]} rotation={[0, 0, Math.PI]}>
            <group position={[-3.282, -42.207, 0]}>
              <mesh           
                geometry={nodes.Cube_1_4_Mat1_0.geometry}
                material={materials['Mat.1_4']}
              />
              <mesh          
                geometry={nodes.Cube_1_4_Mat1_0001.geometry}
                material={materials['Mat.1_5']}
              />
              <mesh        
                geometry={nodes.Cube_1_4_Mat1_0002.geometry}
                material={materials['Mat.1_3']}
              />
              <mesh            
                geometry={nodes.Cube_1_4_Mat_0.geometry}
                material={materials.Mat_2}
              />
            </group>
            <mesh             
              geometry={nodes.White_base_Mat1_0.geometry}
              material={materials['Mat.1_12']}
              position={[-3.282, -87.96, -0.187]}
            />
          </group>
          <group position={[10.483, 15.737, 0]} rotation={[Math.PI, 0, Math.PI]}>
            <group position={[0, 34.967, 0]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh           
                geometry={nodes.Cylinder_1_7_Mat1_0.geometry}
                material={materials['Mat.1_10']}
              />
              <mesh              
                geometry={nodes.Cylinder_1_7_Mat1_0001.geometry}
                material={materials['Mat.1_11']}
              />
            </group>
            <mesh            
              geometry={nodes.Bottom_1_Mat1_0.geometry}
              material={materials['Mat.1_9']}
              position={[0, 60.536, 0]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh          
              geometry={nodes.Top_Mat1_0.geometry}
              material={materials['Mat.1_9']}
              position={[0, 9.621, 0]}
            />
          </group>
          <group position={[10.484, 12.495, 0]} rotation={[0, 0, Math.PI]}>
            <group position={[-0.051, -24.81, 0]}>
              <mesh        
                geometry={nodes.Torus_2_Mat1_0.geometry}
                material={materials['Mat.1_3']}
              />
              <mesh            
                geometry={nodes.Torus_2_Mat1_0001.geometry}
                material={materials['Mat.1_4']}
              />
              <mesh               
                geometry={nodes.Torus_2_Mat1_0002.geometry}
                material={materials['Mat.1_5']}
              />
            </group>
            <group position={[-0.051, -51.506, 0]}>
              <mesh        
                geometry={nodes.Torus_3_Mat1_0.geometry}
                material={materials['Mat.1_3']}
              />
              <mesh           
                geometry={nodes.Torus_3_Mat1_0001.geometry}
                material={materials['Mat.1_4']}
              />
              <mesh           
                geometry={nodes.Torus_3_Mat1_0002.geometry}
                material={materials['Mat.1_5']}
              />
            </group>
          </group>
        </group>
        <group position={[51.073, -28.855, 72.176]}>
          <group position={[0, 114.521, 0]}>
            <mesh        
              geometry={nodes.Cylinder_4_5_Mat2_0.geometry}
              material={materials['Mat.2']}
            />
            <mesh         
              geometry={nodes.Cylinder_4_5_Mat3_0.geometry}
              material={materials['Mat.3_0']}
            />
          </group>
          <group position={[0, -2.949, 0]}>
            <mesh        
              geometry={nodes.Cylinder_8_2_Mat4_0.geometry}
              material={materials['Mat.4']}
            />
            <mesh
              geometry={nodes.Cylinder_8_2_Mat5_0.geometry}
              material={materials['Mat.5']}
            />
          </group>
          <group position={[3.485, 55.709, -0.288]}>
            <mesh      
              geometry={nodes.Cylinder_10_Mat1_0.geometry}
              material={materials['Mat.1_5']}
              position={[-26.861, 0, -15.454]}
            />
            <mesh        
              geometry={nodes.Cylinder_11_Mat1_0.geometry}
              material={materials['Mat.1_4']}
              position={[-29.74, 0, 5.567]}
            />
            <mesh         
              geometry={nodes.Cylinder_12_Mat1_0.geometry}
              material={materials['Mat.1_11']}
              position={[-17.502, 0, 24.573]}
            />
            <mesh          
              geometry={nodes.Cylinder_13_Mat1_0.geometry}
              material={materials['Mat.1_3']}
              position={[2.944, 0, 27.741]}
            />
            <mesh        
              geometry={nodes.Cylinder_2_8_Mat1_0.geometry}
              material={materials['Mat.1_4']}
              position={[19.502, 0, 16.51]}
            />
            <mesh         
              geometry={nodes.Cylinder_7_Mat1_0.geometry}
              material={materials['Mat.1_3']}
              position={[24.253, 0, -4.079]}
            />
            <mesh         
              geometry={nodes.Cylinder_8_Mat1_0.geometry}
              material={materials['Mat.1_4']}
              position={[10.719, 0, -23.229]}
            />
            <mesh        
              geometry={nodes.Cylinder_9_Mat1_0.geometry}
              material={materials['Mat.1_4']}
              position={[-7.567, 0, -27.549]}
            />
          </group>
          <mesh          
            geometry={nodes.Sphere_2_5_Mat_0.geometry}
            material={materials.Mat_3}
            position={[0.632, 49.238, 5.964]}
          />
          <mesh       
            geometry={nodes.Sphere_6_Mat3_0.geometry}
            material={materials['Mat.3']}
            position={[0.632, 21.218, -2.587]}
          />
        </group>
        <group position={[76.118, -45.202, -45.122]}>
          <group position={[0, 20.989, -113.557]}>
            <mesh      
              geometry={nodes.Cube_1_5_Mat_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Cube_1_5_Mat_0001.geometry}
              material={materials.Mat_5}
            />
          </group>
          <mesh      
            geometry={nodes.Cube_5_Mat1_0.geometry}
            material={materials['Mat.1_12']}
            position={[0, 4.579, -113.557]}
          />
        </group>
        <group position={[-164.481, -34.007, -83.005]} rotation={[0, 0.787, 0]}>
          <mesh   
            geometry={nodes.Capsule_1_Mat1_0.geometry}
            material={materials['Mat.1_12']}
            position={[0, 72.616, 0]}
          />
          <mesh   
            geometry={nodes.Cylinder_1_8_Mat1_0.geometry}
            material={materials['Mat.1_7']}
            position={[0, 29.632, 0]}
          />
          <mesh     
            geometry={nodes.Cylinder_2_9_Mat_0.geometry}
            material={materials.Mat_6}
            position={[0, 44.43, 0]}
          />
          <mesh   
            geometry={nodes.Cylinder_3_8_Mat1_0.geometry}
            material={materials['Mat.1_4']}
            position={[0, 59.096, 0]}
          />
          <mesh    
            geometry={nodes.Cylinder_4_6_Mat_0.geometry}
            material={materials.Mat_7}
            position={[0, 73.737, 0]}
          />
          <mesh   
            geometry={nodes.Cylinder_5_2_Mat1_0.geometry}
            material={materials['Mat.1_12']}
            position={[0, -7.121, 0]}
          />
          <mesh       
            geometry={nodes.Cylinder_7_3_Mat_0.geometry}
            material={materials.material}
            position={[0, 0.456, 0]}
          />
          <mesh       
            geometry={nodes.Cylinder_9_2_Mat5_0.geometry}
            material={materials['Mat.5']}
            position={[0, 15.108, 0]}
          />
        </group>
        <group position={[-59.554, -45.202, 103.981]}>
          <group position={[-6.5, 33.657, -88.9]} rotation={[0, 0.787, 0]}>
            <mesh       
              geometry={nodes.Base_1_Mat1_0.geometry}
              material={materials['Mat.1_5']}
            />
            <mesh       
              geometry={nodes.Base_1_Mat1_0001.geometry}
              material={materials['Mat.1_4']}
            />
            <mesh       
              geometry={nodes.Base_1_Mat4_0.geometry}
              material={materials['Mat.4']}
            />
            <mesh       
              geometry={nodes.Base_1_Mat5_0.geometry}
              material={materials['Mat.5']}
            />
            <mesh
              geometry={nodes.Base_1_Mat_0.geometry}
              material={materials.Mat_10}
            />
            <mesh         
              geometry={nodes.Base_1_Mat_0001.geometry}
              material={materials.Mat_2}
            />
          </group>
        </group>
        <group position={[-202.673, 4.304, 78.782]} rotation={[0, 0.787, 0]}>
          <group position={[0, 2.168, 0]}>
            <mesh          
              geometry={nodes.Base_Mat1_0.geometry}
              material={materials['Mat.1_10']}
            />
            <mesh           
              geometry={nodes.Base_Mat1_0001.geometry}
              material={materials['Mat.1_3']}
            />
            <mesh       
              geometry={nodes.Base_Mat1_0002.geometry}
              material={materials['Mat.1_14']}
            />
            <mesh
              geometry={nodes.Base_Mat4_0.geometry}
              material={materials['Mat.4']}
            />
            <mesh        
              geometry={nodes.Base_Mat5_0.geometry}
              material={materials['Mat.5']}
            />
            <mesh           
              geometry={nodes.Base_Mat_0.geometry}
              material={materials.Mat_7}
            />
          </group>
          <group position={[-58.396, -36.81, 95.738]} rotation={[0, 0.766, 0]}>
            <mesh        
              geometry={nodes.Cube_7_Mat_0.geometry}
              material={materials.Mat_7}
            />
            <mesh            
              geometry={nodes.Cube_7_Mat_0001.geometry}
              material={materials.Mat_12}
            />
          </group>
          <group position={[-128.149, -29.575, 22.762]} rotation={[0, -0.227, 0]}>
            <mesh        
              geometry={nodes.Cube_8_Mat3_0.geometry}
              material={materials['Mat.3_0']}
            />
            <mesh      
              geometry={nodes.Cube_8_Mat4_0.geometry}
              material={materials['Mat.4']}
            />
          </group>
          <group position={[30.357, 71.529, 24.747]}>
            <mesh           
              geometry={nodes.Cylinder_1_9_Mat_0.geometry}
              material={materials.Mat_5}
            />
            <mesh       
              geometry={nodes.Cylinder_1_9_Mat_0001.geometry}
              material={materials.Mat_6}
            />
          </group>
          <mesh       
            geometry={nodes.Base_1_2_Mat1_0.geometry}
            material={materials['Mat.1_12']}
            position={[0, -45.077, 0]}
          />
          <mesh      
            geometry={nodes.Cube_12_Mat1_0001.geometry}
            material={materials['Mat.1_4']}
            position={[55.47, 28.249, -23.682]}
          />
          <mesh      
            geometry={nodes.Cube_5_2_Mat1_0.geometry}
            material={materials['Mat.1_3']}
            position={[-51.772, -37.14, -79.49]}
            rotation={[0, 0.766, 0]}
          />
          <mesh         
            geometry={nodes.Cube_6_2_Mat_0.geometry}
            material={materials.Mat_3}
            position={[72.578, -37.14, -65.249]}
            rotation={[0, 0.766, 0]}
          />
          <mesh      
            geometry={nodes.Cylinder_11_2_Mat_0.geometry}
            material={materials.material}
            position={[30.357, 55.344, 26.643]}
          />
        </group>
        <group position={[156.957, -10.295, -247.742]} rotation={[0, -0.554, 0]}>
          <group position={[-17.039, -23.276, -13.807]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-24.342, 0, 0.056]}>
              <group position={[0.059, -1.995, -0.07]}>
                <mesh               
                  geometry={nodes.Wheel_2_Mat1_0.geometry}
                  material={materials['Mat.1_3']}
                />
                <mesh             
                  geometry={nodes.Wheel_2_Mat1_0001.geometry}
                  material={materials['Mat.1_14']}
                />
                <mesh            
                  geometry={nodes.Wheel_2_Mat1_0002.geometry}
                  material={materials['Mat.1_4']}
                />
              </group>
              <group position={[-0.059, 1.942, 0.07]}>
                <mesh
                  geometry={nodes.Wheel_detail_2_Mat3_0.geometry}
                  material={materials['Mat.3_0']}
                />
                <mesh            
                  geometry={nodes.Wheel_detail_2_Mat4_0.geometry}
                  material={materials['Mat.4']}
                />
                <mesh            
                  geometry={nodes.Wheel_detail_2_Mat5_0.geometry}
                  material={materials['Mat.5']}
                />
              </group>
            </group>
            <group position={[24.342, 0, -0.056]}>
              <group position={[0.005, -1.995, 0.043]}>
                <mesh  
                  geometry={nodes.Wheel_1_2_Mat1_0.geometry}
                  material={materials['Mat.1_3']}
                />
                <mesh           
                  geometry={nodes.Wheel_1_2_Mat1_0001.geometry}
                  material={materials['Mat.1_14']}
                />
                <mesh              
                  geometry={nodes.Wheel_1_2_Mat1_0002.geometry}
                  material={materials['Mat.1_4']}
                />
              </group>
              <group position={[-0.005, 1.995, -0.043]}>
                <mesh                
                  geometry={nodes.Wheel_detail_1_2_Mat_0.geometry}
                  material={materials.Mat_3}
                />
                <mesh
                  geometry={nodes.Wheel_detail_1_2_Mat_0001.geometry}
                  material={materials.Mat_0}
                />
                <mesh               
                  geometry={nodes.Wheel_detail_1_2_Mat_0002.geometry}
                  material={materials.Mat_11}
                />
              </group>
            </group>
          </group>
          <group position={[26.117, 5.101, -1.151]} rotation={[Math.PI, 0, Math.PI]}>
            <mesh      
              geometry={nodes.Orange_triangle_Mat3_0.geometry}
              material={materials['Mat.3_0']}
            />
            <mesh      
              geometry={nodes.Orange_triangle_Mat4_0.geometry}
              material={materials['Mat.4']}
            />
          </group>
          <group position={[-17.039, -23.276, 7.465]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[24.342, 0, -0.056]}>
              <group position={[0.005, -2.077, 0.043]} rotation={[0, 0, Math.PI]}>
                <mesh          
                  geometry={nodes.Wheel_1_Mat1_0.geometry}
                  material={materials['Mat.1_3']}
                />
                <mesh             
                  geometry={nodes.Wheel_1_Mat1_0001.geometry}
                  material={materials['Mat.1_14']}
                />
                <mesh
                  geometry={nodes.Wheel_1_Mat1_0002.geometry}
                  material={materials['Mat.1_4']}
                />
              </group>
              <group position={[-0.005, -6.016, -0.043]} rotation={[0, 0, Math.PI]}>
                <mesh          
                  geometry={nodes.Wheel_detail_1_Mat_0.geometry}
                  material={materials.Mat_3}
                />
                <mesh          
                  geometry={nodes.Wheel_detail_1_Mat_0001.geometry}
                  material={materials.Mat_0}
                />
                <mesh            
                  geometry={nodes.Wheel_detail_1_Mat_0002.geometry}
                  material={materials.Mat_11}
                />
              </group>
            </group>
            <group position={[-24.342, 0, 0.056]}>
              <group position={[0.059, -1.995, -0.07]} rotation={[0, 0, Math.PI]}>
                <mesh             
                  geometry={nodes.Wheel_Mat1_0.geometry}
                  material={materials['Mat.1_3']}
                />
                <mesh         
                  geometry={nodes.Wheel_Mat1_0001.geometry}
                  material={materials['Mat.1_14']}
                />
                <mesh              
                  geometry={nodes.Wheel_Mat1_0002.geometry}
                  material={materials['Mat.1_4']}
                />
              </group>
              <group position={[-0.059, -6.542, 0.07]} rotation={[0, 0, Math.PI]}>
                <mesh         
                  geometry={nodes.Wheel_detail_Mat3_0.geometry}
                  material={materials['Mat.3_0']}
                />
                <mesh          
                  geometry={nodes.Wheel_detail_Mat4_0.geometry}
                  material={materials['Mat.4']}
                />
                <mesh            
                  geometry={nodes.Wheel_detail_Mat5_0.geometry}
                  material={materials['Mat.5']}
                />
              </group>
            </group>
          </group>
          <group position={[-18.418, -19.463, -1.151]}>
            <mesh
              geometry={nodes.Ship_base_Mat1_0.geometry}
              material={materials['Mat.1_13']}
            />
            <mesh          
              geometry={nodes.Ship_base_Mat1_0001.geometry}
              material={materials['Mat.1_5']}
            />
          </group>
          <group position={[-4.191, 12.786, -1.151]}>
            <mesh            
              geometry={nodes.Violet_Triangle_Mat_0.geometry}
              material={materials.Mat_0}
            />
            <mesh        
              geometry={nodes.Violet_Triangle_Mat_0001.geometry}
              material={materials.Mat_13}
            />
          </group>
        </group>
        <group position={[-50.909, -10.295, 293.087]} rotation={[Math.PI, -0.615, Math.PI]}>
          <group position={[-17.039, -23.276, -13.807]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-24.342, 0, 0.056]}>
              <group position={[-0.059, 1.942, 0.07]}>
                <mesh              
                  geometry={nodes.Wheel_detail_4_Mat3_0.geometry}
                  material={materials['Mat.3_0']}
                />
                <mesh             
                  geometry={nodes.Wheel_detail_4_Mat4_0.geometry}
                  material={materials['Mat.4']}
                />
                <mesh              
                  geometry={nodes.Wheel_detail_4_Mat5_0.geometry}
                  material={materials['Mat.5']}
                />
              </group>
              <mesh              
                geometry={nodes.Wheel_4_Mat_0.geometry}
                material={materials.Mat_2}
                position={[0.059, -1.995, -0.07]}
              />
            </group>
            <group position={[24.342, 0, -0.056]}>
              <group position={[-0.005, 1.995, -0.043]}>
                <mesh          
                  geometry={nodes.Wheel_detail_1_4_Mat_0.geometry}
                  material={materials.Mat_3}
                />
                <mesh         
                  geometry={nodes.Wheel_detail_1_4_Mat_0001.geometry}
                  material={materials.Mat_0}
                />
                <mesh          
                  geometry={nodes.Wheel_detail_1_4_Mat_0002.geometry}
                  material={materials.Mat_11}
                />
              </group>
              <mesh    
                geometry={nodes.Wheel_1_4_Mat_0.geometry}
                material={materials.Mat_2}
                position={[0.005, -1.995, 0.043]}
              />
            </group>
          </group>
          <group position={[26.117, 5.101, -1.151]} rotation={[Math.PI, 0, Math.PI]}>
            <mesh 
              geometry={nodes.Orange_triangle_2_Mat1_0.geometry}
              material={materials['Mat.1_3']}
            />
            <mesh      
              geometry={nodes.Orange_triangle_2_Mat1_0001.geometry}
              material={materials['Mat.1_14']}
            />
          </group>
          <group position={[-17.039, -23.276, 7.465]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-24.342, 0, 0.056]}>
              <group position={[-0.059, -6.542, 0.07]} rotation={[0, 0, -Math.PI]}>
                <mesh        
                  geometry={nodes.Wheel_detail_3_Mat3_0.geometry}
                  material={materials['Mat.3_0']}
                />
                <mesh           
                  geometry={nodes.Wheel_detail_3_Mat4_0.geometry}
                  material={materials['Mat.4']}
                />
                <mesh            
                  geometry={nodes.Wheel_detail_3_Mat5_0.geometry}
                  material={materials['Mat.5']}
                />
              </group>
              <mesh          
                geometry={nodes.Wheel_3_Mat_0.geometry}
                material={materials.Mat_10}
                position={[0.059, -1.995, -0.07]}
                rotation={[0, 0, -Math.PI]}
              />
            </group>
            <group position={[24.342, 0, -0.056]}>
              <group position={[-0.005, -6.016, -0.043]} rotation={[0, 0, -Math.PI]}>
                <mesh          
                  geometry={nodes.Wheel_detail_1_3_Mat_0.geometry}
                  material={materials.Mat_3}
                />
                <mesh             
                  geometry={nodes.Wheel_detail_1_3_Mat_0001.geometry}
                  material={materials.Mat_0}
                />
                <mesh          
                  geometry={nodes.Wheel_detail_1_3_Mat_0002.geometry}
                  material={materials.Mat_11}
                />
              </group>
              <mesh     
                geometry={nodes.Wheel_1_3_Mat_0.geometry}
                material={materials.Mat_10}
                position={[0.005, -2.077, 0.043]}
                rotation={[0, 0, -Math.PI]}
              />
            </group>
          </group>
          <group position={[-18.418, -19.463, -1.151]}>
            <mesh      
              geometry={nodes.Ship_base_2_Mat_0.geometry}
              material={materials.Mat_9}
            />
            <mesh       
              geometry={nodes.Ship_base_2_Mat_0001.geometry}
              material={materials.Mat_7}
            />
          </group>
          <group position={[-4.191, 12.786, -1.151]}>
            <mesh
              geometry={nodes.Violet_Triangle_2_Mat1_0.geometry}
              material={materials['Mat.1_13']}
            />
            <mesh        
              geometry={nodes.Violet_Triangle_2_Mat1_0001.geometry}
              material={materials['Mat.1_4']}
            />
          </group>
        </group>
      </group>
    </ a.group>
  )
}
