import React from "react";
import { Graph } from "./Graph";
import { NavBar } from "./NavBar";

export const Overlay = (): JSX.Element => {
  return (
    <div className="z-50 absolute flex flex-col pointer-events-none w-full h-full">
      <NavBar />
      <Graph />
    </div>
  );
};
