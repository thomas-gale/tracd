import { SimpleMeshLayerProps } from "@deck.gl/mesh-layers/typed";
import { LayerProps, SimpleMeshLayer } from "deck.gl/typed";
import { CubeGeometry } from "@luma.gl/engine";
import { registerLoaders } from "@loaders.gl/core";
import { GLBLoader, GLTFLoader } from "@loaders.gl/gltf";
import { OBJLoader } from "@loaders.gl/obj";

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
    mesh: "/geometry/factory_room.obj",
    loaders: [OBJLoader],
    getPosition: (d) => d.position,
    getColor: (d) => d.color,
    getOrientation: (d) => [0, d.angle, 0],
  });
};
