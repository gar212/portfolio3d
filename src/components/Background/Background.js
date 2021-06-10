import React from 'react';
import { Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls, Stars} from "@react-three/drei";
import Text from '../Text/Text';

function RotatingTorus() {
  const myMesh = React.useRef()
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime() /4
    myMesh.current.rotation.y = clock.getElapsedTime() /3
  })
  return (
  <mesh ref={myMesh}>
    <torusGeometry args={[10,3,6,100]} />
    <meshStandardMaterial />
  </mesh>
  )
}


export default function Background() {
  return (
    <div id="canvas-container">
      <Canvas>
        <OrbitControls />
        <gridHelper />
        <RotatingTorus />
        <Text>Garet</Text>
        <Stars count="350" />
        <ambientLight intensity={0.02} color="orange" />
        <directionalLight color="orange" position={[0, 0, 5]} />
      </Canvas>
    </div>
  )
}