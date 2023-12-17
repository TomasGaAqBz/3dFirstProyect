
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {a} from '@react-spring/three'

import islandScene from '../assets/3d/island.glb'

    const Island = ({isRotating,setIsRotating,...props}) => {
    const islandRef = useRef()

    const { nodes, materials } = useGLTF(islandScene);
    const {gl,viewport} = useThree()

    const lastX = useRef(0)
    const lastY = useRef(0)
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlerPointerDown = (e) =>{
        e.stopPropagation();
        e.preventDefault()
        setIsRotating(true)

        const clientX = e.touches 
            ? e.touches[0].clientX
            : e.clientX
        lastX.current=clientX

    }
    const handlerPointerUp = (e) =>{
        e.stopPropagation();
        e.preventDefault()
        setIsRotating(false)

        const clientX = e.touches 
            ? e.touches[0].clientX
            : e.clientX

        const delta = (clientX - lastX.current) / viewport.width
        islandRef.current.rotation.y += delta * 0.01 * Math.PI
        lastX.current= clientX

        rotationSpeed.current = delta * 0.01 * Math.PI
    }
    const handlerPointerMove = (e) =>{
        e.stopPropagation();
        e.preventDefault()
        if(isRotating) handlerPointerUp(e)
    }
    const handlerKeyDown = (e) =>{
        if(e.key === 'ArrowLeft'){
            if(!isRotating) setIsRotating(true);
            islandRef.current.rotation.y += 0.01 * Math.PI
        }else if(e.key === 'ArrowRight'){
            if(!isRotating) setIsRotating(true);
            islandRef.current.rotation.y -= 0.01 * Math.PI
        }
    }

    const handleKeyUp = (e) =>{
        if(e.key === 'ArrowLeft' || e.key === 'ArrowRight' ){
        setIsRotating(false)
        }
    }

        useEffect(() => {
        document.addEventListener('pointerdown', handlerPointerDown)
        document.addEventListener('pointerup', handlerPointerUp)
        document.addEventListener('pointermove', handlerPointerMove)
        document.addEventListener('keydown', handlerKeyDown )
        document.addEventListener('keyup',handleKeyUp)
        return () => {
            document.removeEventListener('pointerdown', handlerPointerDown)
            document.removeEventListener('pointerup', handlerPointerUp)
            document.removeEventListener('pointermove', handlerPointerMove)
            document.removeEventListener('keydown', handlerKeyDown )
            document.removeEventListener('keyup',handleKeyUp)
        }
        }, [gl,handlerPointerDown,handlerPointerMove,handlerPointerUp])
        

    return (
        <a.group {...props} ref={islandRef}>
        <mesh
            geometry={nodes.polySurface944_tree_body_0.geometry}
            material={materials.PaletteMaterial001}
        />
        <mesh
            geometry={nodes.polySurface945_tree1_0.geometry}
            material={materials.PaletteMaterial001}
        />
        <mesh
            geometry={nodes.polySurface946_tree2_0.geometry}
            material={materials.PaletteMaterial001}
        />
        <mesh
            geometry={nodes.polySurface947_tree1_0.geometry}
            material={materials.PaletteMaterial001}
        />
        <mesh
            geometry={nodes.polySurface948_tree_body_0.geometry}
            material={materials.PaletteMaterial001}
        />
        <mesh
            geometry={nodes.polySurface949_tree_body_0.geometry}
            material={materials.PaletteMaterial001}
        />
        <mesh
            geometry={nodes.pCube11_rocks1_0.geometry}
            material={materials.PaletteMaterial001}
        />
        </a.group>
    );
    }

useGLTF.preload("/island.glb");

export default Island
