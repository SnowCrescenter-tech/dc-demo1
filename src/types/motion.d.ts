declare module 'framer-motion' {
  import * as React from 'react';

  export interface MotionProps {
    initial?: any;
    animate?: any;
    transition?: any;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
  }

  export const motion: {
    div: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
  };
}
