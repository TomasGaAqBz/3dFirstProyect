import React from 'react'

import planeScene from '../assets/3d/plane.glb'
import { useGLTF } from '@react-three/drei'


const plane = ({isRotating,...props}) => {

    const {scene,animation} = useGLTF(planeScene)
  return (
    <mesh{...props}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default plane