import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from '../assets/3d/bird.glb'

const bird = () => {
  const birdRef= useRef()

  const { scene, animations } = useGLTF(birdScene);

  const { actions } = useAnimations(animations, birdRef);
  useEffect(() => {
    actions["Take 001"].play();
  }, []);
    
  return (
    <mesh ref={birdRef} position={[-5,2,1]} scale={[0.003,0.003,0.003]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default bird