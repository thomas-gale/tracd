import { SimpleMeshLayerProps } from "@deck.gl/mesh-layers/typed";
import { LayerProps, SimpleMeshLayer } from "deck.gl/typed";
import { CubeGeometry } from "@luma.gl/engine";
import { GLBLoader } from "@loaders.gl/gltf";

export interface MeshInstance {
  position: [number, number];
  angle: number;
  color: [number, number, number];
}

export const CreateSimpleCubeMeshLayer = (instances: MeshInstance[]) => {
  return new SimpleMeshLayer({
    id: "cube-mesh-layer",
    data: instances,
    mesh: new CubeGeometry(),
    getPosition: (d) => d.position,
    getColor: (d) => d.color,
    getOrientation: (d) => [0, d.angle, 0],
  });
};

export const CreateSimpleGlbMeshLayer = (
  glbPath: string,
  instances: MeshInstance[]
) => {
  return new SimpleMeshLayer({
    id: "glb-mesh-layer",
    data: instances,
    mesh: glbPath,
    loaders: [GLBLoader],
    getPosition: (d) => d.position,
    getColor: (d) => d.color,
    getOrientation: (d) => [0, d.angle, 0],
  });
};
