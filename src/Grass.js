import { useGLTF, Clone } from "@react-three/drei";

const grassCount = 20;

const Grass = (props) => {
  const model = useGLTF("./Grass/scene.gltf");

  return (
    <group {...props}>
      {[...Array(grassCount).keys()].map((index) => (
        <Clone
          key={index}
          object={model.scene}
          scale={0.02}
          position-x={(Math.random() - 0.5) * 15}
          position-z={(Math.random() - 0.5) * 15}
          rotation-y={Math.random() * Math.PI}
        />
      ))}
    </group>
  );
};

export default Grass;
