import { TracdNodeData } from "../TracdNodeData";

export interface MatterNodeData extends TracdNodeData {
  label: string;
  quantity: number;
}
