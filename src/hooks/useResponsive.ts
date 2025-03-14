import { useState, useEffect } from 'react';

interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}

const breakpoints: Breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const useResponsive = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [dpr, setDpr] = useState(window.devicePixelRatio);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
      setDpr(window.devicePixelRatio);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBaseFontSize = () => {
    if (screenWidth < breakpoints.sm) return 14;
    if (screenWidth < breakpoints.md) return 15;
    if (screenWidth < breakpoints.lg) return 16;
    if (screenWidth < breakpoints.xl) return 16;
    return 16;
  };

  const getScaleFactor = () => {
    return Math.min(screenWidth / 1920, screenHeight / 1080);
  };

  return {
    screenWidth,
    screenHeight,
    dpr,
    isPhone: screenWidth < breakpoints.md,
    isTablet: screenWidth >= breakpoints.md && screenWidth < breakpoints.lg,
    isDesktop: screenWidth >= breakpoints.lg,
    breakpoints,
    getBaseFontSize,
    getScaleFactor,
  };
};
