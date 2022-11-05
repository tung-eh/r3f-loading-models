import { useGLTF } from "@react-three/drei";

const Human = (props) => {
  const model = useGLTF("./McCree/scene.gltf");

  return <primitive object={model.scene} scale={2.75} {...props} />;
};

export default Human;
