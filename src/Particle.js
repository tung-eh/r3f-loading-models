import { useRef, useEffect } from "react";
import { DoubleSide } from "three";

const Particle = () => {
  const geometryRef = useRef();
  const verticlesCount = 10 * 3; // 10 triangles
  const positions = new Float32Array(verticlesCount * 3);

  for (let i = 0; i < verticlesCount * 3; i++) {
    positions[i] = Math.random() - 0.5;
  }

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticlesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color="tomato" side={DoubleSide} />
    </mesh>
  );
};

export default Particle;
