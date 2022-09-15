import type { NextPage } from "next";
import { MapCanvas } from "../components/viewport/MapCanvas";
import { Overlay } from "../components/overlay/Overlay";

const Index: NextPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <Overlay />
      <MapCanvas />
    </div>
  );
};

export default Index;
