import { CubeGeometry } from "@luma.gl/engine";
import { SimpleMeshLayer } from "deck.gl/typed";
import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../state";
import { setSelectedProcessNode } from "../../state/tracd/tracdslice";

export const useProcessNodeMeshLayer = () => {
  const dispatch = useAppDispatch();
  const processNodes = useAppSelector((state) => state.tracd.processNodes);
  const selectedProcessNode = useAppSelector(
    (state) => state.tracd.selectedProcessNodeId
  );

  const processNodeLocations = useMemo(() => {
    return processNodes.map((node) => {
      return {
        id: node.id,
        position: node.data.location,
        color: [0, 0, 255],
        angle: 0,
      };
    });
  }, [processNodes]);

  return useMemo(
    () =>
      new SimpleMeshLayer({
        id: "process-node-mesh-layer",
        data: processNodeLocations,
        mesh: new CubeGeometry(),
        getPosition: (d) => d.position,
        getColor: (d) => d.color,
        getOrientation: (d) => [0, d.angle, 0],
        getScale: (d) =>
          d.id == selectedProcessNode ? [10, 10, 10] : [5, 5, 5],
        pickable: true,
        onClick({ object }) {
          dispatch(setSelectedProcessNode(object.id));
          console.log(object);
        },
      }),
    [dispatch, selectedProcessNode, processNodeLocations]
  );
};
