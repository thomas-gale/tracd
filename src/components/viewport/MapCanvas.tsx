import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { MapCamera } from "./camera/MapCamera";

export const MapCanvas = (): JSX.Element => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight />
        <directionalLight position={[1, 1, 1]} intensity={1} />
        <MapCamera />
        <mesh>
          <boxGeometry />
          <meshBasicMaterial />
        </mesh>
      </Suspense>
    </Canvas>
  );
};
