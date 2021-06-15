import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three'
import {OrbitControls, Stars, OrthographicCamera} from "@react-three/drei";
import Text from './Text';
import GridPlane from './GridPlane';
import boxTex from '../../assets/images/gridImageTrans.png';


export default function Background() {

  // function Dolly() {
  //   // This one makes the camera move in and out
  //   useFrame(({ clock, camera }) => {
  //     camera  = 50 + Math.sin(clock.getElapsedTime()) * 30
  //   })
  //   return null
  // }



const count = 350
const col = 25
// Creates new Array for BoxField
const items = new Array(count).fill().map((pos, rot) => [
    [(rot % col) * 8 - col * 4, Math.floor(rot / col) * 10 - (count / col) * 4, 50 - Math.random() * 200],
    [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
  ])

function BoxField({ position, rotation }) {
  const imgTexBox = useLoader(THREE.TextureLoader, boxTex);
  imgTexBox.wrapS = THREE.RepeatWrapping;
  imgTexBox.wrapT = THREE.RepeatWrapping;
  const mesh = useRef()
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime()
    mesh.current.rotation.y = Math.sin(time / 5)
    mesh.current.rotation.x = Math.sin(time / 5)
  })
  const [{ xy, size }] = useSpring(() => ({ xy: [0, 0], size: 2.8 }))
  return (
    <a.mesh
      ref={mesh} 
      rotation={rotation}
      position={xy.to((x, y) => [x + position[0], y + position[1], position[2]])}
      scale={size.to(s => [s, s, s])}
      >
      <boxGeometry/>
      <meshLambertMaterial map={imgTexBox} transparent={true} side={THREE.DoubleSide} />
    </a.mesh>
  )
  
}

  return (
    <div id="canvas-container">
      <Suspense fallback={<div>Loading...</ div>}>
        <Canvas >
          <OrbitControls />
          <OrthographicCamera position={[0,-1,1]} rotation={[-0.3,0,0]}>
            <GridPlane />
              {items.map(([position, rotation], index) => (
                <BoxField key={index} position={position} rotation={rotation} />
              ))}
            <Text text="GARET LAM" fontSize="1.3" rotation={[0.25,0,0]} position={[0,1.8,-1]} opacity={1} />
            <Text text="CODE. DESIGN. DEVELOP." rotation={[0.25,0,0]} fontSize="0.28" position={[0,0.35,-1]} opacity={1} />
            <Stars count="250" />
            <hemisphereLight intensity={100} />
          </OrthographicCamera>
        </Canvas>
      </Suspense>
    </div>
  )
}