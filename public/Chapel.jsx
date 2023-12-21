/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 chapel.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/chapel.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.candle.geometry} material={materials['default']} />
      <mesh geometry={nodes.woman.geometry} material={materials['default.001']} />
      <mesh geometry={nodes.table.geometry} material={materials['/mat/defaultMat']} />
      <mesh geometry={nodes.candle002.geometry} material={materials['default']} />
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[-0.647, 26.24, 8.429]} />
      <mesh geometry={nodes.altar.geometry} material={materials.altar} position={[0.076, 2.692, -8.917]} scale={0.951} />
      <mesh geometry={nodes.lowerroof.geometry} material={materials.lowerroof} />
      <mesh geometry={nodes.Object_461.geometry} material={materials.FrontCol} />
      <mesh geometry={nodes.Object_462.geometry} material={materials.Roofin02} />
      <mesh geometry={nodes.Object_464.geometry} material={materials.Wood_Ven} />
      <mesh geometry={nodes.roof.geometry} material={materials.roof} />
      <mesh geometry={nodes.innerwalls.geometry} material={materials.innerwalls} />
      <mesh geometry={nodes.Object_454.geometry} material={materials.Roofin02} />
      <mesh geometry={nodes.Object_456.geometry} material={materials.Transluc} />
      <mesh geometry={nodes.Object_457.geometry} material={materials.Roofin02} />
      <mesh geometry={nodes.Object_458.geometry} material={materials.Wood_Boa} />
      <mesh geometry={nodes.Object_459.geometry} material={materials.Wood_Boa} />
      <mesh geometry={nodes.Object_460.geometry} material={materials.Wood_Boa} />
      <mesh geometry={nodes.Object_476.geometry} material={materials.Wood_Ven} />
      <mesh geometry={nodes.Object_478.geometry} material={materials.Wood_F01} />
      <mesh geometry={nodes.Object_479.geometry} material={materials.Wood_Lum} />
      <mesh geometry={nodes.Object_467.geometry} material={materials.Foregrou} />
      <mesh geometry={nodes.Object_468.geometry} material={materials.Wood_Lum} />
      <mesh geometry={nodes.Object_469.geometry} material={materials.Wood_Ven} />
      <mesh geometry={nodes.Object_473.geometry} material={materials.Wood_F02} />
      <mesh geometry={nodes.Object_474.geometry} material={materials.Wood_F02} />
      <mesh geometry={nodes.MainWindow.geometry} material={nodes.MainWindow.material} />
      <mesh geometry={nodes.Object_482.geometry} material={materials.Foregrou} />
      <mesh geometry={nodes.Object_484.geometry} material={materials.Roofing} />
      <mesh geometry={nodes.Windows.geometry} material={materials.Wood_Flo} />
    </group>
  )
}

useGLTF.preload('/chapel.glb')
