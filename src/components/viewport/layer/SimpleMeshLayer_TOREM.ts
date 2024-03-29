import { SimpleMeshLayer } from "deck.gl/typed";
import { CubeGeometry } from "@luma.gl/engine";
import { OBJLoader } from "@loaders.gl/obj";
import { MeshInstance } from "../../../types/geometry/MeshInstance";

export const CreateSimpleCubeMeshLayer = (instances: MeshInstance[]) => {
  return new SimpleMeshLayer({
    id: "cube-mesh-layer",
    data: instances,
    mesh: new CubeGeometry(),
    getPosition: (d) => d.position,
    getColor: (d) => d.color,
    getOrientation: (d) => [0, d.angle, 0],
    pickable: true,
    onClick(pickingInfo, event) {
      console.log("pickingInfo", pickingInfo);
      console.log("event", event);
    },
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
