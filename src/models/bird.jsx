import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

import birdScene from '../assets/3d/bird.glb'

const bird = () => {

    const {scene,animations} = useGLTF(birdScene)
    const birdRef= useRef()
    const { actions } = useAnimations(animations,birdRef)
    useEffect(() => {
      actions["Take 001"].play();
    }, [])
    
  return (
    <mesh position={[-5,2,1]} scale={[0.003,0.003,0.003]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default bird