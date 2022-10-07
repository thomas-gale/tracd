// Reference https://docs.mapbox.com/mapbox-gl-js/example/add-3d-model/
import { useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Layer } from "react-map-gl";
import mapboxgl from "mapbox-gl";

// Render custom geometry
// parameters to ensure the model is georeferenced correctly on the map
const modelRotate = [Math.PI / 2, 0, 0];

const modelAsMercatorCoordinate = mapboxgl.MercatorCoordinate.fromLngLat(
  [-1.898575, 52.489471], // LngLat
  0 //Altitude
);

// transformation parameters to position, rotate and scale the 3D model onto the map
const modelTransform = {
  translateX: modelAsMercatorCoordinate.x,
  translateY: modelAsMercatorCoordinate.y,
  translateZ: modelAsMercatorCoordinate.z,
  rotateX: modelRotate[0],
  rotateY: modelRotate[1],
  rotateZ: modelRotate[2],
  /* Since the 3D model is in real world meters, a scale transform needs to be
   * applied since the CustomLayerInterface expects units in MercatorCoordinates.
   */
  scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits(),
};

// Create a cube geometry using custom map gl layer
export const Test = () => {
  const camera = useRef<THREE.Camera>();
  const scene = useRef<THREE.Scene>();
  const renderer = useRef<THREE.WebGLRenderer>();
  const mapRef = useRef<mapboxgl.Map>();

  return (
    <Layer
      id="test"
      type="custom"
      renderingMode="3d"
      onAdd={(map, gl) => {
        camera.current = new THREE.Camera();
        scene.current = new THREE.Scene();

        // create two three.js lights to illuminate the model
        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(0, -70, 100).normalize();
        scene.current.add(directionalLight);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff);
        directionalLight2.position.set(0, 70, 100).normalize();
        scene.current.add(directionalLight2);

        // use the three.js GLTF loader to add the 3D model to the three.js scene
        const loader = new GLTFLoader();
        loader.load(
          "https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf",
          (gltf) => {
            if (scene.current) {
              scene.current.add(gltf.scene);
            }
          }
        );
        mapRef.current = map;

        // use the Mapbox GL JS map canvas for three.js
        renderer.current = new THREE.WebGLRenderer({
          canvas: map.getCanvas(),
          context: gl,
          antialias: true,
        });

        renderer.current.autoClear = false;
      }}
      render={(gl, matrix) => {
        const rotationX = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(1, 0, 0),
          modelTransform.rotateX
        );
        const rotationY = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(0, 1, 0),
          modelTransform.rotateY
        );
        const rotationZ = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(0, 0, 1),
          modelTransform.rotateZ
        );

        const m = new THREE.Matrix4().fromArray(matrix);
        const l = new THREE.Matrix4()
          .makeTranslation(
            modelTransform.translateX,
            modelTransform.translateY,
            modelTransform.translateZ as number
          )
          .scale(
            new THREE.Vector3(
              modelTransform.scale,
              -modelTransform.scale,
              modelTransform.scale
            )
          )
          .multiply(rotationX)
          .multiply(rotationY)
          .multiply(rotationZ);

        // TODO - Tidy
        if (camera.current) {
          camera.current.projectionMatrix = m.multiply(l);
          if (renderer.current) {
            renderer.current.state.reset();
            if (scene.current) {
              renderer.current.render(scene.current, camera.current);
            }
          }
        }
        if (mapRef.current) {
          mapRef.current.triggerRepaint();
        }
      }}
    />
  );
};
