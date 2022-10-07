import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Edge, Node } from "reactflow";
import type { WorkflowEdgeData } from "../../types/tracd/workflow/WorkflowEdgeData";
import type { WorkflowNodeData } from "../../types/tracd/workflow/WorkflowNodeData";

interface TracdState {
  selectedWorkflowNodeId: string | null;
  workflowNodes: Node<WorkflowNodeData>[];
  workflowEdges: Edge<WorkflowEdgeData>[];
}

const initialState: TracdState = {
  selectedWorkflowNodeId: null,
  workflowNodes: [
    {
      id: "1",
      position: { x: 0, y: 0 },
      data: { location: [-1.898575, 52.489871], label: "Farm" },
    },
    {
      id: "2",
      position: { x: 0, y: 100 },
      data: { location: [-1.898575, 52.489371], label: "Malting" },
    },
    {
      id: "3",
      position: { x: 0, y: 200 },
      data: { location: [-1.898575, 52.488871], label: "Drying" },
    },
  ],
  workflowEdges: [
    { id: "e1-2", source: "1", target: "2", data: { label: "Transport" } },
    { id: "e2-3", source: "2", target: "3", data: { label: "Transport" } },
  ],
};

export const tracdSlice = createSlice({
  name: "tracd",
  initialState,
  reducers: {
    setSelectedWorkflowNode: (state, action: PayloadAction<string | null>) => {
      state.selectedWorkflowNodeId = action.payload;
      state.workflowNodes = state.workflowNodes.map((node) => ({
        ...node,
        selected: node.id == action.payload,
      }));
    },
    setWorkflowNodes: (
      state,
      action: PayloadAction<Node<WorkflowNodeData>[]>
    ) => {
      state.workflowNodes = action.payload;
    },
    setWorkflowEdges: (
      state,
      action: PayloadAction<Edge<WorkflowEdgeData>[]>
    ) => {
      state.workflowEdges = action.payload;
    },
  },
});

export const { setSelectedWorkflowNode, setWorkflowNodes, setWorkflowEdges } =
  tracdSlice.actions;
export default tracdSlice.reducer;
