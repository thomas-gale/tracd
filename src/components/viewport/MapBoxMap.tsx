// Attribution: https://dev.to/dqunbp/using-mapbox-gl-in-react-with-next-js-2glg
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
// import the mapbox-gl styles so that the map is displayed correctly

export const MapBoxMap = () => {
  // this is where the map instance will be stored after initialization
  const [map, setMap] = useState<mapboxgl.Map>();

  // React ref to store a reference to the DOM node that will be used
  // as a required parameter `container` when initializing the mapbox-gl
  // will contain `null` by default
  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;
    // if the window object is not found, that means
    // the component is rendered on the server
    // or the dom node is not initialized, then return early
    if (typeof window === "undefined" || node === null) return;

    // otherwise, create a map instance
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      projection: { name: "globe" },
    });

    // Look at Brum ;)

    const camera = mapboxMap.getFreeCameraOptions();

    camera.position = mapboxgl.MercatorCoordinate.fromLngLat(
      [-1.898575, 50], // LngLat
      500000 // Altitude
    );
    camera.lookAtPoint([-1.898575, 52.489471]);

    mapboxMap.setFreeCameraOptions(camera);

    // save the map object to React.useState
    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <div ref={mapNode} className="h-full w-full" />;
};
