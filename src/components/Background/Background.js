import React from 'react';
import { Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls, Stars} from "@react-three/drei";

function MyAnimatedBox() {
  const myMesh = React.useRef()
  return (
    <mesh ref={myMesh}>
      <boxGeometry />
      <meshBasicMaterial color="royalblue" />
    </mesh>
  )
}

export default function Background() {
  return (
    <div id="canvas-container">
      <Canvas>
        <OrbitControls />
        <mesh>
          <torusGeometry args={[10,3,6,100]} />
          <meshStandardMaterial />
        </mesh>
        <MyAnimatedBox />
        <Stars count="350" />
        <ambientLight intensity={0.02} color="orange" />
        <directionalLight color="orange" position={[0, 0, 5]} />
      </Canvas>
    </div>
  )
}