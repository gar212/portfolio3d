import React, { useRef } from 'react'
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'
// import Segoe from '../../assets/font/SegoeUI_Bold.json';
import Gobold from '../../assets/font/Gobold_Regular.json';

const Text = (props) => {
  const mesh = useRef(null)

  useFrame(() => {
    mesh.current.geometry.center()
  })

  // parse JSON file with Three
  const font = new THREE.FontLoader().parse(Gobold);

  // configure font geometry
  const textOptions = {
    font,
    size: props.fontSize,
    height: 0
  };


  return (
    <mesh rotation={props.rotation} position={props.position} ref={mesh}>
      <textGeometry args={[props.text, textOptions]} />
      <meshLambertMaterial opacity={props.opacity} />
    </mesh>
  )
}


export default Text
