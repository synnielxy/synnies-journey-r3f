import { useDrag } from '@use-gesture/react';
import { Canvas} from '@react-three/fiber';
import { useState} from "react";

import { usePlay } from "./contexts/Play";

import { Experience } from "./components/Experience";
import { Nav } from "./pages/Nav";

function App() {
  const [isDragging, setIsDragging] = useState(false);
  const { setOffset, setVelocity, setHasDrag } = usePlay();

  const bind = useDrag(({ velocity, offset: [x, y], down, }) => {
    setIsDragging(down);
    setHasDrag(true);

    const val = x / (4 * Math.PI) / 100 % 1;  // [0,1)
    setOffset(val);
    setVelocity(velocity[0] > 0.01 ? velocity[0] : 0);
  });

  return (
    <>
      <Canvas {...bind()} style={{ touchAction: 'none', cursor: `${isDragging ? "grabbing" : "grab"}` }}
      >
        <color attach="background" args={["#ececec"]} />
        <Experience/>
      </Canvas>
      <Nav />
    </>
  );
}

export default App;
