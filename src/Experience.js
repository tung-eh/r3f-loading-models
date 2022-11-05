import { lazy, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Placeholder from "./Placeholder";

const Hamburger = lazy(() => import("./Hamburger"));
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
      <Suspense
        fallback={<Placeholder scale={[2, 1, 2]} position={[0, -0.5, 0]} />}
      >
        <Hamburger position={[0, -1, 0]} />
      </Suspense>
      <Suspense
        fallback={<Placeholder scale={[1, 3, 5]} position={[-5, 0.5, 0]} />}
      >
        <Fox position={[-5, -1, 0]} />
      </Suspense>
    </>
  );
};

export default Experience;
