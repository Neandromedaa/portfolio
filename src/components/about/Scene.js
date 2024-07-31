import React, { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Center } from '@react-three/drei';
import { useContext } from 'react';
import { hoverContext } from './hoverContext';


export function Scene(props) {
  const { nodes, materials } = useGLTF('Scene3D/scene.glb');
  const hoverTip = useContext(hoverContext)

  return (
    <>
      <group onPointerEnter={(e) => {
                  e.stopPropagation();
                }} 
                onPointerLeave={(e) => {
                  e.stopPropagation();
                }} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.029}>
          <mesh geometry={nodes.Object_2.geometry} material={materials.Mat_15} />
          <mesh geometry={nodes.Object_3.geometry} material={materials.Mat_16} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.Mat_14} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.Mat_25} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.Mat_26} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.Mat_27} />
          <mesh on geometry={nodes.Object_8.geometry} material={materials.base} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.main} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.sidewalk} />
          <mesh 
                scale={hoverTip.hovered ? 2 : 1} 
                position={hoverTip.hovered ? [550, -860, -15] : [0, 0, 0]} 
                onPointerEnter={(e) => {
                  hoverTip.handleHoveredT();
                }} 
                onPointerLeave={(e) => {
                  hoverTip.handleHoveredF();
                }}
                geometry={nodes.Object_11.geometry} 
                material={materials.pump} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.Mat_1} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.Mat_1} />
          <mesh geometry={nodes.Object_14.geometry} material={materials.material} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.Mat_10} />
          <mesh geometry={nodes.Object_16.geometry} material={materials.Mat_11} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.Mat_12} />
          <mesh geometry={nodes.Object_18.geometry} material={materials.Mat_13} />
          <mesh geometry={nodes.Object_19.geometry} material={materials.Mat_17} />
          <mesh geometry={nodes.Object_20.geometry} material={materials.Mat_18} />
          <mesh geometry={nodes.Object_21.geometry} material={materials.Mat_19} />
          <mesh geometry={nodes.Object_22.geometry} material={materials.Mat_2} />
          <mesh geometry={nodes.Object_23.geometry} material={materials.Mat_20} />
          <mesh geometry={nodes.Object_24.geometry} material={materials.Mat_21} />
          <mesh geometry={nodes.Object_25.geometry} material={materials.Mat_22} />
          <mesh geometry={nodes.Object_26.geometry} material={materials.Mat_23} />
          <mesh geometry={nodes.Object_27.geometry} material={materials.Mat_24} />
          <mesh geometry={nodes.Object_28.geometry} material={materials.Mat_3} />
          <mesh geometry={nodes.Object_29.geometry} material={materials.Mat_4} />
          <mesh geometry={nodes.Object_30.geometry} material={materials.Mat_6} />
          <mesh geometry={nodes.Object_31.geometry} material={materials.Mat_6} />
          <mesh geometry={nodes.Object_32.geometry} material={materials.Mat_6} />
          <mesh geometry={nodes.Object_33.geometry} material={materials.Mat_6} />
          <mesh geometry={nodes.Object_34.geometry} material={materials.Mat_5} />
          <mesh geometry={nodes.Object_35.geometry} material={materials.Mat_5} />
          <mesh geometry={nodes.Object_36.geometry} material={materials.Mat_7} />
          <mesh geometry={nodes.Object_37.geometry} material={materials.Mat_7} />
          <mesh geometry={nodes.Object_38.geometry} material={materials.Mat_7} />
          <mesh geometry={nodes.Object_39.geometry} material={materials.Mat_7} />
          <mesh geometry={nodes.Object_40.geometry} material={materials.Mat_8} />
          <mesh geometry={nodes.Object_41.geometry} material={materials.Mat_8} />
          <mesh geometry={nodes.Object_42.geometry} material={materials.Mat_8} />
          <mesh geometry={nodes.Object_43.geometry} material={materials.Mat_8} />
          <mesh geometry={nodes.Object_44.geometry} material={materials.Mat_9} />
          <mesh geometry={nodes.Object_45.geometry} material={materials.Silos} />
          <mesh geometry={nodes.Object_46.geometry} material={materials.metaltrim} />
        </group>
      </group>
    </>
  )
}

useGLTF.preload('Scene3D/scene.glb')
