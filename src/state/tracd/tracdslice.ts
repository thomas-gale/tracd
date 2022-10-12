import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Edge, Node } from "reactflow";
import type { ProcessEdgeData } from "../../types/tracd/process/ProcessEdgeData";
import type { ProcessNodeData } from "../../types/tracd/process/ProcessNodeData";
import { MatterNodeData } from "../../types/tracd/matter/MatterNodeData";

interface TracdState {
  selectedProcessNodeId: string | null;
  processNodes: Node<ProcessNodeData>[];
  processEdges: Edge<ProcessEdgeData>[];
  selectedMatterNodeId: string | null;
  matterNodes: Node<MatterNodeData>[];
}

const initialState: TracdState = {
  selectedProcessNodeId: null,
  processNodes: [
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
  processEdges: [
    { id: "e1-2", source: "1", target: "2", data: { label: "Transport" } },
    { id: "e2-3", source: "2", target: "3", data: { label: "Transport" } },
  ],
  selectedMatterNodeId: null,
  matterNodes: [
    {
      id: "1",
      position: { x: 0, y: 0 },
      data: {
        label: "Barley",
        location: [-1.898575, 52.489671],
        quantity: 100,
      },
    },
    {
      id: "2",
      position: { x: 0, y: 0 },
      data: {
        label: "Germinated Malt",
        location: [-1.898575, 52.489071],
        quantity: 50,
      },
    },
  ],
};

export const tracdSlice = createSlice({
  name: "tracd",
  initialState,
  reducers: {
    setSelectedProcessNode: (state, action: PayloadAction<string | null>) => {
      state.selectedProcessNodeId = action.payload;
      state.processNodes = state.processNodes.map((node) => ({
        ...node,
        selected: node.id == action.payload,
      }));
    },
    setProcessNodes: (
      state,
      action: PayloadAction<Node<ProcessNodeData>[]>
    ) => {
      state.processNodes = action.payload;
    },
    setProcessEdges: (
      state,
      action: PayloadAction<Edge<ProcessEdgeData>[]>
    ) => {
      state.processEdges = action.payload;
    },
    setSelectedMatterNode: (state, action: PayloadAction<string | null>) => {
      state.selectedMatterNodeId = action.payload;
      state.matterNodes = state.matterNodes.map((node) => ({
        ...node,
        selected: node.id == action.payload,
      }));
    },
    setMatterNodes: (state, action: PayloadAction<Node<MatterNodeData>[]>) => {
      state.matterNodes = action.payload;
    },
  },
});

export const {
  setSelectedProcessNode,
  setProcessNodes,
  setProcessEdges,
  setSelectedMatterNode,
  setMatterNodes,
} = tracdSlice.actions;
export default tracdSlice.reducer;
