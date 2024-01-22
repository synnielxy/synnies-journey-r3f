
import { Float, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import * as THREE from 'three'

import { usePlay } from "../contexts/Play";

import { Background } from "./Background";
import { Airplane } from "./Airplane";
import { Sphere } from './Sphere';
import { FloatingSquare } from './Squares';

export const Experience = () => {
  const sphereRef = useRef();
  const { offset, play } = usePlay();

  useEffect(() => {
    sphereRef.current.rotation.z = offset * Math.PI * 2;
    tl.current.seek(offset * tl.current.duration());
    planeTl.current.seek(offset * planeTl.current.duration());
    cameraTl.current.seek(offset * cameraTl.current.duration())
  }, [offset]);

  const tl = useRef();
  const planeTl = useRef();
  const cameraTl = useRef();

  const backgroundColors = useRef({
    colorA: '#357ca1',
    colorB: 'white',
  });

  const planeHeightRef = useRef({ value: 0.1 });
  const cameraRef = useRef();
  const cameraGroupRef = useRef();
  const sceneOpacity = useRef(0);

  useFrame(({ mouse, camera }, delta) => {
    if (window.innerWidth > window.innerHeight) {
      // LANDSCAPE
      cameraRef.current.fov = 30;
      cameraRef.current.position.z = 5;
    } else {
      // PORTRAIT
      cameraRef.current.fov = 80;
      cameraRef.current.position.z = 2;
    }

    if (play) {
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03)
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.3 + 0.2, 0.01)
      camera.position.z = THREE.MathUtils.lerp(camera.position.z,
        Math.max(4, Math.abs(mouse.x * mouse.y * 5)), 0.01)
      camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.025, 0.001)
    }

    if (play && sceneOpacity.current < 1) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        1,
        delta * 0.5
      );
    }
  })

  useLayoutEffect(() => {
    cameraTl.current = gsap.timeline();

    cameraTl.current.to(cameraGroupRef.current.position, {
      duration: 1,
      z: 0.5
    })
    cameraTl.current.to(cameraGroupRef.current.position, {
      duration: 1,
      z: 0.3
    })
    cameraTl.current.to(cameraGroupRef.current.position, {
      duration: 1,
      z: 1
    })
    cameraTl.current.to(cameraGroupRef.current.position, {
      duration: 1,
      z: 1
    })
    cameraTl.current.to(cameraGroupRef.current.position, {
      duration: 1,
      z: 0
    })
    cameraTl.current.to(cameraGroupRef.current.position, {
      duration: 1,
      z: 1,
      y: 0
    })
    cameraTl.current.to(cameraGroupRef.current.position, {
      duration: 1,
      z: 2.1,
      y: .5
    })
    cameraTl.current.to(cameraGroupRef.current.position, {
      duration: 1,
      z: 2,
      y: .5
    })
    cameraTl.current.to(cameraGroupRef.current.position, {
      duration: 1,
      z: 0,
      y: 0
    })
    cameraTl.current.to(cameraGroupRef.current.position, {
      duration: 1,
      z: 0
    })

    cameraTl.current.pause()

    tl.current = gsap.timeline();

    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#3949b3",
      colorB: "#718EFF",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#9158b8",//purple
      colorB: "#ffad30",//orange
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: '#357ca1',
      colorB: '#ffad30',
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: '#357ca1',
      colorB: 'white',
    });

    tl.current.pause();

    planeTl.current = gsap.timeline();

    planeTl.current.to(planeHeightRef.current, {
      value: 0.35,
      duration: 1,
    })
    planeTl.current.to(planeHeightRef.current, {
      value: 0.1,
      duration: 1,
    })
    planeTl.current.to(planeHeightRef.current, {
      value: -0.05,
      duration: 1,
    })
    planeTl.current.to(planeHeightRef.current, {
      value: 0.1,
      duration: 1,
    })
    planeTl.current.to(planeHeightRef.current, {
      value: .35,
      duration: 1,
    })
    planeTl.current.to(planeHeightRef.current, {
      value: 0.1,
      duration: 1,
    })
    planeTl.current.to(planeHeightRef.current, {
      value: 0.1,
      duration: .5,
    })
    planeTl.current.to(planeHeightRef.current, {
      value: 0.5,
      duration: 1.5,
    })
    planeTl.current.to(planeHeightRef.current, {
      value: 0.65,
      duration: 1,
    })
    planeTl.current.to(planeHeightRef.current, {
      value: 0.5,
      duration: 1,
    })
    planeTl.current.to(planeHeightRef.current, {
      value: 0.3,
      duration: 1,
    })
    planeTl.current.to(planeHeightRef.current, {
      value: 0.1,
      duration: 1,
    })

    planeTl.current.pause();
  }, [])


  return useMemo(
    () => (
      <>
        <directionalLight position={[0, 3, 1]} intensity={1} />

        <FloatingSquare />
        <Background backgroundColors={backgroundColors} />

        <group ref={cameraGroupRef}>
          <PerspectiveCamera
            ref={cameraRef}
            position={[0, 20, 5]}
            fov={30}
            makeDefault
          />
        </group>

        <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
          <Airplane
            planeHeightRef={planeHeightRef}
            scale={[0.15, 0.15, 0.15]}
            sceneOpacity={sceneOpacity}
          />
        </Float>

        <Sphere
          ref={sphereRef}
          sceneOpacity={sceneOpacity}
          scale={[0.15, 0.15, 0.15]}
          position={[0, -2.2, 0]}
        />


      </>
    ), []);
};
