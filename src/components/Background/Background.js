import React from 'react';
import { Canvas } from '@react-three/fiber'
import {OrbitControls, Stars} from "@react-three/drei";
import Text from './Text';

export default function Background() {

  function getCameraPosition() {
    
  }

  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0.2, 1] }}>
        <OrbitControls />
        <gridHelper />
        <Text text="Garet Lam" fontSize="2" position={[0,3,-10]} />
        <Stars count="400" />
        <ambientLight intensity={0.02} color="orange" />
        <directionalLight color="orange" position={[0, 0, 5]} />
      </Canvas>
    </div>
  )
}