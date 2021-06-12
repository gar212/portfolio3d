import React, { useRef } from 'react'
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'
import Segoe from '../../assets/font/SegoeUI_Bold.json';

const Text = (props) => {
  const mesh = useRef(null)

  useFrame(() => {
    mesh.current.geometry.center()
  })

  // parse JSON file with Three
  const font = new THREE.FontLoader().parse(Segoe);

  // configure font geometry
  const textOptions = {
    font,
    size: props.fontSize,
    height: 0
  };


  return (
    <mesh position={props.position} ref={mesh}>
      <textGeometry args={[props.text, textOptions]} />
      <meshBasicMaterial transparent={true} opacity={props.opacity} />
    </mesh>
  )
}


export default Text
