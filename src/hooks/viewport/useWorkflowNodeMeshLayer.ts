import { CubeGeometry } from "@luma.gl/engine";
import { SimpleMeshLayer } from "deck.gl/typed";
import { useMemo } from "react";
import { useAppSelector } from "../state";

export const useWorkflowNodeMeshLayer = () => {
  const workflowNodes = useAppSelector((state) => state.tracd.workflowNodes);

  const workflowNodeLocations = useMemo(() => {
    return workflowNodes.map((node) => {
      return {
        position: node.data.location,
        color: [0, 0, 255],
        angle: 0,
      };
    });
  }, [workflowNodes]);

  return useMemo(
    () =>
      new SimpleMeshLayer({
        id: "workflow-node-mesh-layer",
        data: workflowNodeLocations,
        mesh: new CubeGeometry(),
        getPosition: (d) => d.position,
        getColor: (d) => d.color,
        getOrientation: (d) => [0, d.angle, 0],
        pickable: true,
        onClick(pickingInfo, event) {
          // TODO - link back to specific workflow node
          console.log("pickingInfo", pickingInfo);
          console.log("event", event);
        },
      }),
    [workflowNodeLocations]
  );
};
