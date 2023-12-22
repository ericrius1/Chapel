import { Environment, useTexture, useGLTF } from "@react-three/drei"
import * as THREE from 'three'
import { useControls } from "leva"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
export default function MyEnvironment() {

    const envMap = useTexture('/environmentmaps/day.jpg')
    const mesh = useRef()

    const { height } = useControls('environment', { height: { value: -10, min: -10, max: 100, step: 1 } })

    useFrame(({ clock }, delta) => {
        mesh.current.rotation.y += delta * .3
    })
    return (
        <>

            <mesh scale={10000} position-y={height} ref={mesh}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshBasicMaterial map={envMap} side={THREE.BackSide} />
            </mesh>
            < Environment near={1} far={10000} resolution={256} frames={Infinity}>
                <mesh scale={100} position-y={height} ref={mesh}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshBasicMaterial map={envMap} side={THREE.BackSide} />
                </mesh>
            </Environment >
        </>

    )
}