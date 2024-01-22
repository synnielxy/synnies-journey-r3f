import { useEffect, useMemo, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";

import { usePlay } from "../contexts/Play";

export function Home() {
  const { progress } = useProgress();

  const step = 5;
  const textSections = useMemo(() => {
    return [
      {
        text1: `Hello there! I'm Synnie,`,
        text2: `and I'd like to invite you to join me on my journey.`
      },
      {
        text1: `My adventure began in college,`,
        text2: `where I studied computer science.`
      },
      {
        text1: `This experience sparked a deep interest in algorithms and programming,`,
        text2: `laying the foundation for my future career.`
      },
      {
        text1: `After graduating,`,
        text2: `I embraced the role of a creative developer at a new media company`
      }, {
        text1: `I discovered my passion for immersive experiences,`,
        text2: `a blend of technology and creativity.`
      },
      {
        text1: `Seeking to deepen my knowledge, `,
        text2: `I moved to the U.S. for my Master's studies.`
      }, {
        text1: `Currently,`,
        text2: `I am interested in three.js and web dev.`
      }, {
        text1: `My journey is still unfolding,`,
        text2: `and I'm excited about the possibilities that lie ahead.`
      }
    ]
  }, [])

  const { play, setPlay, hasDrag, offset } = usePlay();
  const card = useRef();
  const [opacity, setOpacity] = useState(1);
  const [section, setSection] = useState(0);    // [0,40) int
  const [x, setX] = useState(0);                // [0,40) float

  useEffect(() => {
    setX(offset * 40);
    setSection(Math.floor(offset * 40));

    const cur = x % step;
    if (cur >= 0 && cur < 1) {
      setOpacity(cur);
    } else if (cur >= 2) {
      setOpacity(3 - cur);
    }

  }, [offset]);

  return (<div >
    <div className={`overlay ${play ? "overlay--disable" : ""}
    ${hasDrag ? "overlay--scrolled" : ""}`}>
      <div className={`loader 
      ${progress === 100 ? "loader--disappear" : ""}
      `
      } />

      {
        progress === 100 && (
          <div className={`intro ${play ? "intro--disappear" : ""}`}>
            <h1 className="logo">Synnie's Journey</h1>
            <p className="intro__scroll">{"Drag to begin the journey -->"}</p>
            <button
              className="explore"
              onClick={() => {
                setPlay(true);
              }}
            >Explore</button>
          </div>
        )
      }
    </div>

    <div className="card-container" ref={card} style={{ opacity: opacity }}>
      {section >= 0 &&
        <div className="card">
          <p className="card-text">{textSections[Math.floor(section / step)].text1}</p>
          <p className="card-text">{textSections[Math.floor(section / step)].text2}</p>
        </div>

      }
    </div>

  </div>);
}

