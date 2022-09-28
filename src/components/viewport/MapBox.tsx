import Map, { Source, Layer, LayerProps } from "react-map-gl";
import { BrumCube } from "./layer/BrumCube";

const geojson: GeoJSON.FeatureCollection<
  GeoJSON.Geometry,
  GeoJSON.GeoJsonProperties
> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-1.898575, 52.489471] },
      properties: { title: "My Point" },
    },
  ],
};

const layerStyle: LayerProps = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 100,
    "circle-color": "#007cbf",
  },
};
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
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
          <BrumCube />
        </Source>
      </Map>
    </div>
  );
};
