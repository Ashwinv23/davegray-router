import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const windowResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    windowResize();
    console.log(windowSize);

    window.addEventListener("resize", windowResize);

    return () => window.removeEventListener("resize", windowResize);
  }, [windowSize]);
  return windowSize;
};

export default useWindowSize;
