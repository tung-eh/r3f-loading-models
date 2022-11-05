import { useGLTF } from "@react-three/drei";

const Hamburger = (props) => {
  const model = useGLTF("./hamburger.glb");

  return <primitive object={model.scene} scale={0.2} {...props} />;
};

export default Hamburger;
