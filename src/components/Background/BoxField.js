import React from 'react'
import { useSpring, a } from '@react-spring/three'




const BoxField = (props) => {
    const count = 200
    const col = 12
    const items = new Array(count).fill().map((_, i) => [
    [(i % col) * 8 - col * 4, Math.floor(i / col) * 8 - (count / col) * 4, 50 - Math.random() * 100],
    [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
  ])

  const [{ xy, size }] = useSpring(() => ({ xy: [0, 0], size: 1 }))
  const BoxFields = <a.mesh
      rotations={props.rotation}
      positions={xy.to((x, y) => [x + props.position[0], y + props.position[1], props.position[2]])}
      scale={size.to(s => [s, s, s])}>
      <boxGeometry args={[1, 1]} />
      <meshBasicMaterial wireframe={true}  />
    </a.mesh>;

  return (
    items.map(([positions, rotations], index) => (
    <BoxFields key={index} position={positions} rotation={rotations} />
    ))
  )
}

export default BoxField
