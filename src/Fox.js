import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";

const Fox = (props) => {
  const fox = useRef();
  const model = useGLTF("./Fox/glTF/Fox.gltf");
  const { action } = useControls("Fox", {
    action: {
      value: "Run",
      options: {
        Running: "Run",
        Walking: "Walk",
        Surveying: "Survey",
      },
    },
  });
  const animations = useAnimations(model.animations, model.scene);
  useEffect(() => {
    animations.actions[action].reset().fadeIn(0.5).play();
    return () => {
      animations.actions[action].fadeOut(0.5);
    };
  }, [action]);

  const velocity = {
    Run: 1,
    Walk: 0.6,
    Survey: 0,
  }[action];
  const movingRadius = 6;
  useFrame(({ clock }, delta) => {
    const { position, rotation } = fox.current;
    const angle = Math.atan2(position.x, position.z) + delta * velocity;
    position.x = movingRadius * Math.sin(angle);
    position.z = movingRadius * Math.cos(angle);
    rotation.y = angle + Math.PI / 2;
  });

  return <primitive ref={fox} object={model.scene} scale={0.035} {...props} />;
};

export default Fox;
