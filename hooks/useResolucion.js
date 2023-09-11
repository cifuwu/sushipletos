import { useState, useEffect } from "react";

const useResolucion = () => {
  if (typeof window !== "undefined") {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
  
    useEffect(() => {
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
  
    return { width, height };
  }
  return { width: 500, height: 500};
  };

export default useResolucion;