import ReactFlow, {
  Controls,
  Background,
  NodeChange,
  NodeSelectionChange,
} from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";
import { useAppDispatch, useAppSelector } from "../../hooks/state";
import { setSelectedProcessNode } from "../../state/tracd/tracdslice";

export const Graph = () => {
  const dispatch = useAppDispatch();
  const processNodes = useAppSelector((state) => state.tracd.processNodes);
  const processEdges = useAppSelector((state) => state.tracd.processEdges);

  return (
    <div className="flex min-h-0 w-full h-1/2 mt-auto z-50">
      <div className="p-4 m-3 w-full bg-white bg-opacity-80 flex flex-row items-center shadow-md rounded-xl pointer-events-auto">
        <ReactFlow
          nodes={processNodes}
          edges={processEdges}
          onNodesChange={(changes: NodeChange[]) => {
            changes.forEach((change) => {
              if (change.type === "select") {
                if ((change as unknown as NodeSelectionChange).selected) {
                  dispatch(setSelectedProcessNode(change.id));
                }
              }
            });
          }}
          nodesConnectable={false}
          fitView={true}
          title="Tracd Graph"
        >
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};
