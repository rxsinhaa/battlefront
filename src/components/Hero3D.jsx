'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

// The rotating 3D element
function WireframeCore() {
    const meshRef = useRef();

    useFrame((state, delta) => {
        // Slow, dramatic rotation
        meshRef.current.rotation.y += delta * 0.15;
        meshRef.current.rotation.x += delta * 0.1;
    });

    return (
        <mesh ref={meshRef} scale={1.5}>
            <icosahedronGeometry args={[2, 1]} />
            {/* Using the Forsythia yellow from the palette */}
            <meshBasicMaterial color="#FFC801" wireframe={true} transparent opacity={0.25} />
        </mesh>
    );
}

export default function Hero3D() {
    return (
        // dpr limits the pixel ratio so it doesn't fry mobile GPUs
        <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]}>
            <WireframeCore />
        </Canvas>
    );
}