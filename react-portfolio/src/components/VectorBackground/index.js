import React, {useCallback, useEffect, useState} from 'react';
import "./style.css";

function getWindowSize() {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth,
    };
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    const handleResize = useCallback(() => {
        setWindowSize(getWindowSize());
    }, [setWindowSize]);

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [handleResize]);
  
    return windowSize;
}

function VectorBackground() {
    const windowSize = useWindowSize();

    useEffect(() => {
        console.log(windowSize);
    }, [windowSize]);
    
    return <canvas className="VectorBackground_root" />;
}

export default (VectorBackground);