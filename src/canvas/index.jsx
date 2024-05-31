import { Canvas } from "@react-three/fiber";
import { Environment, Center, TrackballControls } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
<Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 100 }} // Increase the field of view (fov) for a wider view
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.6} />
      <Environment preset="studio" background />

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
        <TrackballControls
        enableZoom={true}
        enableRotate={true}
  minAzimuthAngle={-Math.PI / 4}
  maxAzimuthAngle={Math.PI / 4}
  minPolarAngle={Math.PI / 6}
  maxPolarAngle={Math.PI - Math.PI / 6}
/>
      </CameraRig>

    </Canvas>
  );
};

export default CanvasModel;
