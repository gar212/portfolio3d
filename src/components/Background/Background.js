import React, { Suspense, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {OrbitControls, Stars, OrthographicCamera} from "@react-three/drei";
import Text from './Text';

export default function Background() {


  function Dolly() {
    // This one makes the camera move in and out
    useFrame(({ clock, camera }) => {
      camera  = 50 + Math.sin(clock.getElapsedTime()) * 30
    })
    return null
  }

  return (
    <div id="canvas-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas >
          <OrthographicCamera position={[0,-0.6, -1.5]} rotation={[-0.1, 0, 0]}>
            <gridHelper position={[0,-1, 0]} />
            <OrbitControls />
            <Text text="GARET LAM" fontSize="1.6" position={[0,1.5,-1]} opacity={1} />
            <Text text="CODE. DESIGN. DEVELOP" fontSize="0.3" position={[0,0,-1]} opacity={1} />
            <Stars count="250" />
            <ambientLight intensity={0.02} color="orange" />
            <directionalLight color="orange" position={[0, 0, 5]} />
          </OrthographicCamera>
        </Canvas>
      </Suspense>
    </div>
  )
}