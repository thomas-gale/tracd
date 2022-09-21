import type { NextPage } from "next";
import { Overlay } from "../components/overlay/Overlay";
// import { MapBoxMap } from "../components/viewport/MapBoxMap";
import { MapBox } from "../components/viewport/MapBox";

const Index: NextPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <Overlay />
      <MapBox />
    </div>
  );
};

export default Index;
