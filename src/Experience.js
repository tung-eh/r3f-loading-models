import { lazy, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Placeholder from "./Placeholder";

const Grass = lazy(() => import("./Grass"));
const Human = lazy(() => import("./Human"));
const Fox = lazy(() => import("./Fox"));

const Experience = () => {
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <directionalLight castShadow position={[1, 2, 3]} />
      <ambientLight intensity={0.5} />

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={Math.PI * -0.5}
        scale={20}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Suspense fallback={null}>
        <Grass position={[0, -1, 0]} />
      </Suspense>
      <Suspense
        fallback={<Placeholder scale={[2, 6, 2]} position={[0, 2, 0]} />}
      >
        <Human position={[0, -1, 0]} />
      </Suspense>
      <Suspense
        fallback={<Placeholder scale={[1, 2, 5]} position={[-5, 0.5, 0]} />}
      >
        <Fox position={[-5, -1, 0]} />
      </Suspense>
    </>
  );
};

export default Experience;
