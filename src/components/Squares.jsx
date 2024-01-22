import { useRef, useMemo } from "react";
import { useFrame } from '@react-three/fiber';
import { Instances, Instance } from '@react-three/drei';
import { MathUtils } from "three";

export function FloatingSquare({ count = 100 }) {
  const groupRef = useRef();

  // Randomize properties for each square
  const squares = useMemo(() => {
    return new Array(count).fill().map(() => ({
      position: [Math.random() * 6 - 3, MathUtils.randFloatSpread(12) - 3, Math.random() * 5 - 5],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      scale: Math.random() * 0.5 + 0.5,
    }));
  }, [count]);

  useFrame(() => {
    groupRef.current.children.forEach(mesh => {
      mesh.position.y += 0.02;
      if(mesh.position.x > 0) {
        mesh.position.x += 0.01
      }else if(mesh.position.x < 0) {
        mesh.position.x -= 0.01
      }
      if (mesh.position.y > 12) {
        mesh.position.y = -3;
        mesh.position.x = Math.random() * 6 - 3;
      }
    });
  });

  return (
    <group>
      <Instances ref={groupRef}>
        <planeGeometry args={[.1, .1]} />
        <meshStandardMaterial color="white" />
        {squares.map((props, i) => (
          <Instance key={i} {...props} />
        ))}
      </Instances>
    </group>
  );
}
