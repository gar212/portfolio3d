import React, { useMemo, useCallback, useRef } from 'react';
import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber'
import gridImage from '../../assets/images/circle.png';

const Points = () => {
  const imgTex = useLoader(THREE.TextureLoader, gridImage);
  const bufferRef = useRef();

  let t = 1; // Default 1
  let f = 0.001; // Default 0.001
  let a = 2; // Default 3
  const graph = useCallback((x, z) => {
    return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
  }, [t, f, a])

  const number = 150
  const sep = 1
  let positions = useMemo(() => {
    let positions = []

    for (let xi = 0; xi < number; xi++) {
      for (let zi = 0; zi < number; zi++) {
        let x = sep * (xi - number / 2);
        let z = sep * (zi - number / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [number, sep, graph])

  useFrame(() => {
    t += 15
    
    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < number; xi++) {
      for (let zi = 0; zi < number; zi++) {
        let x = sep * (xi - number / 2);
        let z = sep * (zi - number / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  })

  return (
    <points position={[0,-7,-40]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        map={imgTex}
        color={"white"}
        size={0.2}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );


}

export default Points
