import React from 'react'
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber'
import gridTexture from '../../assets/images/gridImage.jpg';

const GridPlane = () => {
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

export default GridPlane
