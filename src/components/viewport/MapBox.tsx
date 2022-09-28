import Map from "react-map-gl";
import { BrumCube } from "./layer/BrumCube";

export const MapBox = () => {
  return (
    <div className="h-full w-full">
      <Map
        initialViewState={{
          longitude: -1.898575,
          latitude: 52.489471,
          zoom: 20,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        projection="globe"
      >
        <BrumCube />
      </Map>
    </div>
  );
};
