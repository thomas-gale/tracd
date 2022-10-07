import { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  NodeChange,
  EdgeChange,
} from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";
import { useAppSelector } from "../../hooks/state";

export const Graph = () => {
  const workflowNodes = useAppSelector((state) => state.tracd.workflowNodes);
  const workflowEdges = useAppSelector((state) => state.tracd.workflowEdges);

  return (
    <div className="flex min-h-0 w-full h-1/2 mt-auto z-50">
      <div className="p-4 m-3 w-full bg-white bg-opacity-80 flex flex-row items-center shadow-md rounded-xl pointer-events-auto">
        <ReactFlow
          nodes={workflowNodes}
          edges={workflowEdges}
          onNodesChange={(changes: NodeChange[]) => {
            // console.log("Node Change", changes);
            // TODO - dispatch to redux
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
