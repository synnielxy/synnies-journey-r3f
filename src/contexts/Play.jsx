import { createContext, useContext, useState } from "react";

const Context = createContext();

export const PlayProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);     // [0,1) float
  const [velocity, setVelocity] = useState(0); // speed of drag
  const [play, setPlay] = useState(false);
  const [hasDrag, setHasDrag] = useState(false);

  return (
    <Context.Provider
      value={{
        offset,
        setOffset,
        velocity,
        setVelocity,
        play,
        setPlay,
        hasDrag,
        setHasDrag
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const usePlay = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("usePlay must be used within a PlayProvider");
  }

  return context;
};