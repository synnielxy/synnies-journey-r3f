/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, forwardRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Sphere = forwardRef(({ sceneOpacity, ...props }, ref) => {
  return (
    <group ref={ref} {...props}>
      <Planet
        rotation-y={-Math.PI / 2}
        sceneOpacity={sceneOpacity}
      />
    </group>
  );
});

function Planet({ sceneOpacity, ...props }) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/models/planet/planet.glb");

  useEffect(() => {
    groupRef.current.traverse((child) => {
      if (child.isMesh) {
        child.material.transparent = true;
      }
    });
  }, []);

  useFrame(() => {
    groupRef.current.traverse((child) => {
      if (child.isMesh) {
        child.material.opacity = sceneOpacity.current;
      }
    });
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
        rotation={[0.085, 0, 0]}
        scale={10}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[3.312, -4.279, -9.647]}
        rotation={[0.342, -0.32, -1.358]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano003.geometry}
        material={nodes.Plano003.material}
        position={[4.995, -5.901, 9.626]}
        rotation={[1.183, -0.824, -1.058]}
        scale={[0.472, 0.306, 0.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano002.geometry}
        material={nodes.Plano002.material}
        position={[5.132, -5.902, 9.773]}
        rotation={[1.026, -0.853, -1.167]}
        scale={[0.125, 0.182, 0.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_geodésica007.geometry}
        material={nodes.Esfera_geodésica007.material}
        position={[5.303, -5.486, 9.772]}
        rotation={[1.803, -0.197, -0.644]}
        scale={0.335}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cilindro004.geometry}
        material={nodes.Cilindro004.material}
        position={[5.06, -5.897, 9.676]}
        rotation={[0.332, -0.62, -0.181]}
        scale={[0.073, 0.277, 0.072]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_geodésica018.geometry}
        material={nodes.Esfera_geodésica018.material}
        position={[5.303, -5.486, 9.772]}
        rotation={[1.803, -0.197, -0.644]}
        scale={0.335}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_geodésica019.geometry}
        material={nodes.Esfera_geodésica019.material}
        position={[5.303, -5.486, 9.772]}
        rotation={[1.803, -0.197, -0.644]}
        scale={0.335}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cilindro001.geometry}
        material={nodes.Cilindro001.material}
        position={[5.06, -5.897, 9.676]}
        rotation={[0.332, -0.62, -0.181]}
        scale={[0.073, 0.277, 0.072]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_geodésica020.geometry}
        material={nodes.Esfera_geodésica020.material}
        position={[7.658, 7.214, 6.344]}
        rotation={[0.45, -0.056, -0.849]}
        scale={0.335}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cilindro002.geometry}
        material={nodes.Cilindro002.material}
        position={[7.48, 7.048, 6.765]}
        rotation={[-0.933, -0.398, -0.056]}
        scale={[0.073, 0.277, 0.072]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree001.geometry}
        material={nodes.Tree001.material}
        position={[5.421, 9.103, -4.047]}
        rotation={[-0.246, 0.161, -0.521]}
        scale={0.169}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree003.geometry}
        material={nodes.Tree003.material}
        position={[4.487, 9.685, -3.849]}
        rotation={[-0.324, 0.197, -0.347]}
        scale={0.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree004.geometry}
        material={nodes.Tree004.material}
        position={[4.839, 10.22, -1.355]}
        rotation={[-0.088, 0.085, -0.544]}
        scale={0.143}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree005.geometry}
        material={nodes.Tree005.material}
        position={[4.839, 10.22, -1.355]}
        rotation={[-0.088, 0.085, -0.544]}
        scale={0.143}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree006.geometry}
        material={nodes.Tree006.material}
        position={[6.024, 9.444, -1.746]}
        rotation={[-0.088, 0.085, -0.544]}
        scale={0.143}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree007.geometry}
        material={nodes.Tree007.material}
        position={[5.087, 9.838, -2.519]}
        rotation={[-0.239, 0.173, -0.522]}
        scale={0.149}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree008.geometry}
        material={nodes.Tree008.material}
        position={[6.089, 9.189, -2.662]}
        rotation={[-0.239, 0.173, -0.522]}
        scale={0.106}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree009.geometry}
        material={nodes.Tree009.material}
        position={[6.647, 8.779, -2.882]}
        rotation={[-0.239, 0.173, -0.522]}
        scale={0.143}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree010.geometry}
        material={nodes.Tree010.material}
        position={[4.009, 10.162, -3.143]}
        rotation={[-0.32, 0.21, -0.348]}
        scale={0.208}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree011.geometry}
        material={nodes.Tree011.material}
        position={[5.642, 9.78, -1.005]}
        rotation={[-0.081, 0.096, -0.545]}
        scale={0.089}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree012.geometry}
        material={nodes.Tree012.material}
        position={[8.342, 7.016, -3.152]}
        rotation={[-0.217, 0.207, -0.83]}
        scale={0.143}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree013.geometry}
        material={nodes.Tree013.material}
        position={[4.221, 9.427, -4.711]}
        rotation={[-0.3, 0.261, -0.352]}
        scale={0.112}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree014.geometry}
        material={nodes.Tree014.material}
        position={[6.552, 7.857, -4.92]}
        rotation={[-0.288, 0.255, -0.662]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree015.geometry}
        material={nodes.Tree015.material}
        position={[6.331, 7.52, -5.671]}
        rotation={[-0.436, 0.361, -0.629]}
        scale={0.052}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree016.geometry}
        material={nodes.Tree016.material}
        position={[1.737, 9.526, -5.957]}
        rotation={[-0.562, 0.408, -0.129]}
        scale={0.163}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree017.geometry}
        material={nodes.Tree017.material}
        position={[0.807, 9.433, -6.281]}
        rotation={[-0.562, 0.408, -0.129]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree018.geometry}
        material={nodes.Tree018.material}
        position={[0.223, 9.052, -6.943]}
        rotation={[-0.562, 0.408, -0.129]}
        scale={0.132}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree019.geometry}
        material={nodes.Tree019.material}
        position={[0.283, 8.493, -7.58]}
        rotation={[-0.754, 0.426, -0.081]}
        scale={0.102}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree021.geometry}
        material={nodes.Tree021.material}
        position={[0.905, 8.002, -8.003]}
        rotation={[-0.754, 0.426, -0.081]}
        scale={0.109}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree022.geometry}
        material={nodes.Tree022.material}
        position={[1.259, 7.548, -8.418]}
        rotation={[-0.754, 0.426, -0.081]}
        scale={0.077}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree002.geometry}
        material={nodes.Tree002.material}
        position={[2.17, -0.676, 14.361]}
        rotation={[1.585, -0.073, -0.072]}
        scale={0.143}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree020.geometry}
        material={nodes.Tree020.material}
        position={[4.212, 0.191, 14.043]}
        rotation={[1.364, -0.02, -0.394]}
        scale={0.143}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.House001.geometry}
        material={nodes.House001.material}
        position={[3.536, 6.099, 10.396]}
        rotation={[0.933, -0.112, -0.202]}
        scale={0.632}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.House002.geometry}
        material={nodes.House002.material}
        position={[7.916, 4.538, 8.475]}
        rotation={[2.587, 0.673, -1.786]}
        scale={0.768}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Boat001.geometry}
        material={nodes.Boat001.material}
        position={[2.219, 9.468, 3.16]}
        rotation={[-0.248, -1.229, -0.64]}
        scale={0.072}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Boat002.geometry}
        material={nodes.Boat002.material}
        position={[2.187, -8.39, 5.085]}
        rotation={[1.2, -1.403, -1.624]}
        scale={0.052}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Boat003.geometry}
        material={nodes.Boat003.material}
        position={[0.888, -0.776, -9.629]}
        rotation={[1.5, -0.74, -2.989]}
        scale={0.052}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_geodésica001.geometry}
        material={nodes.Esfera_geodésica001.material}
        position={[3.08, -4.894, 11.284]}
        rotation={[2.054, -0.092, -0.386]}
        scale={0.759}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera001.geometry}
        material={nodes.Esfera001.material}
        position={[1.893, -6.402, 10.775]}
        rotation={[1.935, -0.367, -0.304]}
        scale={0.201}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_geodésica002.geometry}
        material={nodes.Esfera_geodésica002.material}
        position={[5.892, -2.248, 12.932]}
        rotation={[2.043, -0.086, -0.618]}
        scale={0.789}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_geodésica003.geometry}
        material={nodes.Esfera_geodésica003.material}
        position={[6.612, -1.967, 12.184]}
        rotation={[2.043, -0.086, -0.618]}
        scale={0.789}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_geodésica004.geometry}
        material={nodes.Esfera_geodésica004.material}
        position={[2.465, -2.281, 13.909]}
        rotation={[1.971, -0.061, -0.058]}
        scale={0.789}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_geodésica005.geometry}
        material={nodes.Esfera_geodésica005.material}
        position={[5.083, 1.517, 13.407]}
        rotation={[1.403, 0.074, -0.395]}
        scale={0.789}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera002.geometry}
        material={nodes.Esfera002.material}
        position={[6.062, -2.574, 12.277]}
        rotation={[1.86, -0.33, -0.656]}
        scale={0.201}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera003.geometry}
        material={nodes.Esfera003.material}
        position={[3.35, -2.06, 13.947]}
        rotation={[1.952, -0.363, -0.062]}
        scale={0.201}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera004.geometry}
        material={nodes.Esfera004.material}
        position={[3.428, 1.505, 14.112]}
        rotation={[1.286, -0.205, -0.403]}
        scale={0.201}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_geodésica006.geometry}
        material={nodes.Esfera_geodésica006.material}
        position={[5.083, 1.517, 13.407]}
        rotation={[1.403, 0.074, -0.395]}
        scale={0.789}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_geodésica010.geometry}
        material={nodes.Esfera_geodésica010.material}
        position={[9.505, 2.664, 8.131]}
        rotation={[1.397, 0.034, -0.909]}
        scale={0.677}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_geodésica015.geometry}
        material={nodes.Esfera_geodésica015.material}
        position={[3.999, 3.501, 13.075]}
        rotation={[1.203, 0.403, -0.391]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Esfera_geodésica016.geometry}
        material={nodes.Esfera_geodésica016.material}
        position={[7.459, 1.553, 10.395]}
        rotation={[1.6, 0.16, -0.731]}
        scale={0.595}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Círculo001.geometry}
        material={nodes.Círculo001.material}
        position={[4.774, -2.261, 13.806]}
        rotation={[2.331, 0.958, 0.229]}
        scale={0.029}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Círculo004.geometry}
        material={nodes.Círculo004.material}
        position={[6.041, -0.28, 13.642]}
        rotation={[0.279, 1.002, 1.341]}
        scale={0.238}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Círculo005.geometry}
        material={nodes.Círculo005.material}
        position={[5.409, 7.695, 8.934]}
        rotation={[0.986, 0.637, 0.342]}
        scale={0.013}
      />
    </group>
  );
}

useGLTF.preload("/models/planet/planet.glb");