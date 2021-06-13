import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber'
import {OrbitControls, Stars, OrthographicCamera} from "@react-three/drei";
import Text from './Text';
import gridTexture from '../../assets/images/gridImage.jpg';

export default function Background() {


  // function Dolly() {
  //   // This one makes the camera move in and out
  //   useFrame(({ clock, camera }) => {
  //     camera  = 50 + Math.sin(clock.getElapsedTime()) * 30
  //   })
  //   return null
  // }

  function GridPlane() {
    const imgTex = useLoader(THREE.TextureLoader, gridTexture);
    imgTex.wrapS = THREE.RepeatWrapping;
    imgTex.wrapT = THREE.RepeatWrapping;
    imgTex.anisotropy = 8;
    imgTex.repeat.set( 40, 60);

    return (
      <mesh position={[0,-1,10]} rotation={[Math.PI/ -2.0, 0, 0] }>
        <planeGeometry args={[30,30]}  />
        <meshLambertMaterial map={imgTex} />
      </mesh>
    )
  }

  return (
    <div id="canvas-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas >
          <OrbitControls />
          <OrthographicCamera position={[0,-1,0]} rotation={[-0.3,0,0]}>
            <GridPlane/>
            <Text text="GARET LAM" fontSize="1.3" rotation={[0.25,0,0]} position={[0,1.6,-1]} opacity={1} />
            <Text text="CODE. DESIGN. DEVELOP." rotation={[0.25,0,0]} fontSize="0.28" position={[0,0.15,-1]} opacity={1} />
            <Stars count="250" />
            <hemisphereLight intensity={100} />
          </OrthographicCamera>
        </Canvas>
      </Suspense>
    </div>
  )
}