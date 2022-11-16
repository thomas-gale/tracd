import config from "../../env/config.json";

export const NavBar = () => (
  <div className="flex-shrink z-50 w-full">
    <div className="p-4 m-3 bg-neutral bg-opacity-80 flex flex-row items-center shadow-md rounded-xl">
      <h1>{config.NAME}</h1>
    </div>
  </div>
);
