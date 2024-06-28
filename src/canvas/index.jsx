import { Canvas } from "@react-three/fiber";
import { Environment, Center, TrackballControls } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 1], fov: 50 }} // Increase the field of view (fov) for a wider view
      gl={{ preserveDrawingBuffer: true }}
      className="w-full h-full z-20
      "
    >
      <ambientLight intensity={0.4} />
      <Environment preset="studio" background />

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
        <TrackballControls
          enableZoom={true}
          maxDistance={2}
          minDistance={0.8}
          enableRotate={true}
          minAzimuthAngle={-Infinity}  // No restriction on horizontal rotation
          maxAzimuthAngle={Infinity}   // No restriction on horizontal rotation
          minPolarAngle={Math.PI / 4}  // Restrict looking too far up
          maxPolarAngle={3 * Math.PI / 4}  // Restrict looking too far down
        />
      </CameraRig>

    </Canvas>
  );
};

export default CanvasModel;
