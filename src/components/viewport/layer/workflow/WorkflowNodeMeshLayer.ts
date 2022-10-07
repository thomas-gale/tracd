import { SimpleMeshLayer } from "deck.gl/typed";
import { CubeGeometry } from "@luma.gl/engine";
import { MeshInstance } from "../../../../types/geometry/MeshInstance";

export const CreateWorkflowNodeMeshLayer = (instances: MeshInstance[]) => {
  return new SimpleMeshLayer({
    id: "workflow-node-mesh-layer",
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
