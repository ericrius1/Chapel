import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { dampQ } from "maath/easing";
import { mapLinear, randFloat } from "three/src/math/MathUtils";

const targetObject = new THREE.Object3D();

const createWingGeometry = (side) => {
    const geometry = new THREE.BufferGeometry();
    let vertices;
    let normals;
    const gap = 0.01;
    if (side === "left") {
        vertices = new Float32Array([
            -0.5,
            0,
            -0.25,
            0 - gap,
            0,
            -0.25,
            0 - gap,
            0,
            0.25,
        ]);

        normals = new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0]);
    } else if (side === "right") {
        vertices = new Float32Array([
            0.5,
            0,
            -0.25,
            0 + gap,
            0,
            -0.25,
            0 + gap,
            0,
            0.25,
        ]);
        normals = new Float32Array([0, -1, 0, 0, -1, 0, 0, -1, 0]);
    }

    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
    );
    geometry.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));

    return geometry;
};

const Wing = ({ side, position, wingSpeedRef }) => {
    const geometry = useMemo(() => createWingGeometry(side), [side]);
    const indexToMove = 0;
    const vertexIndex = indexToMove * 3;
    const positionAttribute = geometry.attributes.position;
    useFrame((state, delta) => {
        const moveY =
            Math.sin(state.clock.elapsedTime * wingSpeedRef.current) * 0.188;

        // we want to access y component, so add offset of 1
        positionAttribute.array[vertexIndex + 1] = moveY;
        positionAttribute.needsUpdate = true;

        geometry.computeVertexNormals();
    });
    return (
        <mesh geometry={geometry} position={position} castShadow>
            <meshBasicMaterial
                side={2}
                color={[100, 100, 100]}
                toneMapped={true}
                metalness={0}
                roughness={1}
            />
        </mesh>
    );
};

const Bird = ({ startingPosition = [0, 0, 0], targetPoint, speed, startingX, id, ...props }) => {
    const bird = useRef();
    const wingSpeedRef = useRef(0);


    useFrame((state, delta) => {
        const phase = Math.sin(state.clock.elapsedTime * 0.2 + id / 10);
        wingSpeedRef.current = mapLinear(phase, -1, 1, 10, 11);
        // targetPoint.y = Math.cos(state.clock.elapsedTime * 2) * 0.005 + 1;
        targetObject.lookAt(targetPoint);
        dampQ(bird.current.quaternion, targetObject.quaternion, 0.99, delta,);
        bird.current.translateZ(delta * speed);

        if (bird.current.position.x > 1000) {
            bird.current.position.copy(startingPosition)
        }
    });

    return (
        <group ref={bird} position={startingPosition} {...props}>
            <Wing side="right" wingSpeedRef={wingSpeedRef} />
            <Wing side="left" wingSpeedRef={wingSpeedRef} />
        </group>
    );
};

export default function Birds({ position = [0, 0, 0], scale = 1 }) {
    return (
        <group>
            {birds.map((bird) => (
                <Bird key={bird.key} scale={bird.scale} startingPosition={bird.position} targetPoint={bird.targetPoint} speed={bird.speed} id={bird.id} />
            ))}
        </group>
    );
}

const birds = Array.from({ length: 300 }).map((_, index) => {
    const depth = randFloat(-2000, -100);
    const height = randFloat(-100, 300);
    const side = randFloat(50, 1000)
    return {
        key: 'instance_' + index,
        speed: randFloat(5, 100),
        scale: randFloat(5, 8),

        id: index / 100, //normalized between 0 and 1
        position: new THREE.Vector3(
            -side,
            height,
            depth
        ),
        targetPoint: new THREE.Vector3(
            1000,
            randFloat(-height, height * 2),
            depth * randFloat(0.8, 1.3)
        ),
        // scale: 1.5,
    }
})
