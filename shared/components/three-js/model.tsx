"use client"

import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
export function Model() {
	const { scene } = useGLTF("/models/banana.glb")
	const groupRef = useRef<THREE.Mesh>(null!)

	useFrame((state, delta) => {
		const t = state.clock.elapsedTime
		groupRef.current.rotation.y += delta * 0.5
		groupRef.current.position.y = Math.sin(t) * 0.2 - 1
	})

	return (
		<group ref={groupRef}>
			<primitive object={scene} scale={1} rotation={[0, 0, 0]} position={[0, -1, 0]} />
		</group>
	)
}
