import { Points, PointMaterial } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as random from 'maath/random';
import React, { useRef } from 'react';
import type * as THREE from 'three';

function StarField(props: any) {
    const ref = useRef<THREE.Points>(null!);
    const [sphere] = React.useState(() =>
        random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 })
    );

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#f59e0b"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function ThreeDBackground() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 1] }}
                dpr={[1, 2]}
                gl={{ antialias: true }}
            >
                <StarField />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
            </Canvas>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>
    );
}