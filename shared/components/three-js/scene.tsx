"use client"

import { Canvas } from "@react-three/fiber"
import { Model } from "./model"
import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"

export default function Scene() {
	return (
		<div className="bg-background w-50 h-50">
			<Canvas camera={{ position: [15, 15, 15] }}>
				<ambientLight intensity={1} />
				<directionalLight position={[5, 5, 5]} />
				<OrbitControls enableZoom />

				<Suspense fallback={null}>
					<Model />
				</Suspense>
			</Canvas>
		</div>
	)
}
