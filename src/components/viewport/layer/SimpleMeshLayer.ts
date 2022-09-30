import { SimpleMeshLayerProps } from "@deck.gl/mesh-layers/typed";
import { LayerProps, SimpleMeshLayer } from "deck.gl/typed";
import { CubeGeometry } from "@luma.gl/engine";
import { registerLoaders } from "@loaders.gl/core";
import { GLBLoader, GLTFLoader } from "@loaders.gl/gltf";

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

export const CreateSimpleLoadedMeshLayer = (instances: MeshInstance[]) => {
  return new SimpleMeshLayer({
    id: "loaded-mesh-layer",
    data: instances,
    mesh: "https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf",
    loaders: [GLTFLoader],
    getPosition: (d) => d.position,
    getColor: (d) => d.color,
    getOrientation: (d) => [0, d.angle, 0],
  });
};
