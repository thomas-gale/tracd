import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export const MapCamera = (): JSX.Element => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, -5]} up={[0, 0, 1]} />
      <OrbitControls panSpeed={1} rotateSpeed={1} zoomSpeed={1} />
    </>
  );
};
