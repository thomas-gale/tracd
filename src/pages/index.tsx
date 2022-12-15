import type { NextPage } from "next";
import { BeerTracd } from "../components/matter/BeerTracd";
import { Overlay } from "../components/overlay/Overlay";
import { DeckCanvas } from "../components/viewport/DeckCanvas";

const Index: NextPage = () => {
  return (
    <BeerTracd />
    // <div className="flex flex-col h-screen w-screen overflow-hidden">
    //   <Overlay />
    //   <DeckCanvas />
    // </div>
  );
};

export default Index;
