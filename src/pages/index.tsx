import type { NextPage } from "next";
import { Overlay } from "../components/overlay/Overlay";
// import { MapBoxMap } from "../components/viewport/MapBoxMap";
import { DeckCanvas } from "../components/viewport/DeckCanvas";

const Index: NextPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <Overlay />
      <DeckCanvas />
    </div>
  );
};

export default Index;
