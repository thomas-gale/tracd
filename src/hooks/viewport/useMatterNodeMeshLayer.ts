import { CubeGeometry } from "@luma.gl/engine";
import { SimpleMeshLayer } from "deck.gl/typed";
import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../state";
import { setSelectedMatterNode } from "../../state/tracd/tracdslice";

export const useMatterNodeMeshLayer = () => {
  const dispatch = useAppDispatch();
  const matterNodes = useAppSelector((state) => state.tracd.matterNodes);
  const selectedMatterNode = useAppSelector(
    (state) => state.tracd.selectedMatterNodeId
  );

  const matterNodeLocations = useMemo(() => {
    return matterNodes.map((node) => {
      return {
        id: node.id,
        position: node.data.location,
        color: [255, 255, 0],
        angle: 0,
      };
    });
  }, [matterNodes]);

  return useMemo(
    () =>
      new SimpleMeshLayer({
        id: "matter-node-mesh-layer",
        data: matterNodeLocations,
        mesh: new CubeGeometry(),
        getPosition: (d) => d.position,
        getColor: (d) => d.color,
        getOrientation: (d) => [0, d.angle, 0],
        getScale: (d) => (d.id == selectedMatterNode ? [5, 5, 5] : [2, 2, 2]),
        pickable: true,
        onClick({ object }) {
          dispatch(setSelectedMatterNode(object.id));
          console.log(object);
        },
      }),
    [dispatch, selectedMatterNode, matterNodeLocations]
  );
};
