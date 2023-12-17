import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import Sky from "../../models/Sky";
import Loader from '../../components/Loader/Loader'
import Island from '../../models/island'
import Bird from '../../models/bird'
import Plane from '../../models/plane'



{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  Pop up
</div> */}
 const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const[isRotating, setIsRotating] = useState(false)

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const adjustPlaneForScreenSize = () =>{
    let screenScale , screenPostion

    if(window.innerWidth <768){
      screenScale= [1.5,1.5,1.5]
      screenPostion= [0,-1.5,0]
      
    }else{
      screenScale= [3,3,3]
      screenPostion=[0,-2,-4]
    }
    return [screenScale,screenPostion]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale,planePosition] = adjustPlaneForScreenSize()

  return (
    <section className='w-full h-screen relative'>
      <Canvas className={ ` w-full h-screen bg-transparent ${isRotating? 'cursor-grabbing' : ' cursor-grab'} ` } camera={{near:0.1, far:1000}}>
        <Suspense fallback={<Loader/>}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

          <Bird/>
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
          isRotating={isRotating}
          position={planePosition}
          scale={planeScale}
          rotation={[0,20,0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}


export default Home
