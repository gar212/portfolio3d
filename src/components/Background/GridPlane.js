import React from 'react'
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber'
import gridTexture from '../../assets/images/gridImage2.jpg';

const GridPlane = () => {
    const imgTex = useLoader(THREE.TextureLoader, gridTexture);
    imgTex.wrapS = THREE.RepeatWrapping;
    imgTex.wrapT = THREE.RepeatWrapping;
    imgTex.anisotropy = 8;
    imgTex.repeat.set( 50, 70);
    return (
      
      <mesh position={[0,-1,10]} rotation={[Math.PI/ -2.0, 0, 0] }>
        <planeGeometry args={[90,90]}  />
        <meshLambertMaterial map={imgTex} />
        <lineSegments position={[0,0,-25.1]} >
          <boxGeometry args={[90,90,50]}  />  
          <lineDashedMaterial dashSize={10} scale={10} />
        </lineSegments>

      </mesh>
    )
}

export default GridPlane
