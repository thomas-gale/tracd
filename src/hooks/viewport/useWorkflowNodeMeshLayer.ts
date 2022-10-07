import { CubeGeometry } from "@luma.gl/engine";
import { SimpleMeshLayer } from "deck.gl/typed";
import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../state";
import { setSelectedWorkflowNode } from "../../state/tracd/tracdslice";

export const useWorkflowNodeMeshLayer = () => {
  const dispatch = useAppDispatch();
  const workflowNodes = useAppSelector((state) => state.tracd.workflowNodes);
  const selectedWorkflowNode = useAppSelector(
    (state) => state.tracd.selectedWorkflowNodeId
  );

  const workflowNodeLocations = useMemo(() => {
    return workflowNodes.map((node) => {
      return {
        id: node.id,
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
        getScale: (d) =>
          d.id == selectedWorkflowNode ? [10, 10, 10] : [5, 5, 5],
        pickable: true,
        onClick({ object }) {
          dispatch(setSelectedWorkflowNode(object.id));
          console.log(object);
        },
      }),
    [dispatch, selectedWorkflowNode, workflowNodeLocations]
  );
};
